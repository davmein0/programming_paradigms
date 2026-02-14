class Defect {
  /* Establishes a defect object.
   * bug_id is a number, blocks and depends are lists of numbers
   * Everthing else is a string.
   */
  constructor(
    bug_id,
    component,
    status,
    resolution,
    summary,
    blocks = [],
    depends = [],
    fixed_by_username,
    fixed_by_real_name,
  ) {
    this.bug_id = bug_id;
    this.component = component;
    this.status = status;
    this.resolution = resolution;
    this.summary = summary;
    this.blocks = blocks;
    this.depends = depends;
    this.fixed_by_username = fixed_by_username;
    this.fixed_by_real_name = fixed_by_real_name;
  }
}

function loadObjects() {
  /* ... Your implementation here ... */
  // You can use the readFile from the fs module
  // See the documentation: https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
  // The CSV files are comma-separated// import the NodeJS modules
  const fs = require("fs"); // module for file I/O
  const readline = require("readline"); // module for reading line-by-line from file

  // create input streams
  let defectsCSV = fs.readFileSync("defects.csv", "utf8");
  let dependsCSV = fs.readFileSync("defect_depends.csv", "utf8");
  let blocksCSV = fs.readFileSync("defect_blocks.csv", "utf8");
  let developersCSV = fs.readFileSync("developers.csv", "utf8");

  const defects = [];
  // Reads defects CSV line-by-line
  // Extract bug_id, component, status, resolution, summary, username
  const rows = defectsCSV.split("\n").forEach((row) => {
    const fields = row.split(",");
    // Create a new defect, then set attributes
    let defect = new Defect();

    defect.bug_id = Number(fields[0]);
    defect.component = fields[1];
    defect.status = fields[2];
    defect.resolution = fields[3];
    defect.summary = fields[4];
    defect.fixed_by_username = fields.at(-1);

    defects.push(defect);
  });

  // Read depends CSV line by line
  dependsCSV.split("\n").forEach((row) => {
    /* Your logic here to parse the rows */
    const fields = row.split(",");
    // fields[0]: bug_id, fields[1]: a defect dependent on it.
    defects.forEach((defect) => {
      if (defect.bug_id == Number(fields[0])) {
        defect.depends.push(Number(fields[1]));
      }
    });
  });

  // Parse blockCSV file, bug_id in first column,
  // the id of the defect it blocks in second column
  blocksCSV.split("\n").forEach((row) => {
    const fields = row.split(",");
    defects
      .filter((defect) => defect.bug_id == Number(fields[0]))
      .forEach((defect) => defect.blocks.push(Number(fields[1])));
  });

  // Parse developersCSV file, first col contains unique username,
  // the second col contains the corresponding real name
  developersCSV.split("\n").forEach((row) => {
    /* Your logic here to parse the rows */
    const fields = row.split(",");
    defects
      .filter((defect) => defect.fixed_by_username == fields[0])
      .forEach((defect) =>
        fields[1] ? (defect.fixed_by_real_name = fields[1]) : null,
      );
  });

  return defects;
}

// How many defects have been solved by developers
// (i.e., status=”RESOLVED” and resolution="FIXED") so far?
function query1(defects) {
  return defects.filter(
    (defect) => defect.status === "RESOLVED" && defect.resolution === "FIXED",
  ).length;
}

// Count the number of defects whose summary attribute include the word "buildbot" regardless of case
function query2(defects) {
  return defects.filter(
    (defect) =>
      defect.summary
        .split(" ") // split the summary into words
        .map((word) => word.toLowerCase()) // make each word lowercase
        .find((word) => word === "buildbot") !== undefined, // Only include if "buildbot" found
  ).length;
}

// What percentage of issues are still in the backlog (status!=RESOLVED)?
function query3(defects) {
  let backlog = defects.filter((defect) => defect.status !== "RESOLVED").length;

  return ((100 * backlog) / defects.length).toFixed(2);
}

// What is the most defective component
// (that is, the component that has the highest number of associated defects)?
function query4(defects) {
  let componentCount = new Map();
  let maxComponent = "";
  let maxCount = 0;

  defects.forEach((defect) => {
    if (componentCount.has(defect.component)) {
      componentCount.set(
        defect.component,
        componentCount.get(defect.component) + 1,
      );
    } else {
      componentCount.set(defect.component, 1);
    }
  });

  componentCount.forEach((count, component) => {
    if (count > maxCount) {
      maxCount = count;
      maxComponent = component;
    }
  });

  return maxComponent;
}

//  What is the username of the developer who fixed the most documentation defects
// (i.e., status === "RESOLVED" && resolution === "FIXED" && component === "Documentation")?
function query5(defects) {
  let fixedDefects = defects.filter(
    (defect) =>
      defect.status === "RESOLVED" &&
      defect.resolution === "FIXED" &&
      defect.component === "Documentation",
  );
  let usernameFixedMap = fixedDefects.reduce((map, defect) => {
    map.set(
      defect.fixed_by_username,
      (map.get(defect.fixed_by_username) || 0) + 1,
    );
    return map;
  }, new Map());
  const usernameFixedList = Array.from(usernameFixedMap.entries());
  usernameFixedList.sort(compareUsernameFixed);
  return usernameFixedList.length > 0 ? usernameFixedList[0][0] : null;
}

// Is there any circular dependency?
// (ex:, bug A blocks bug B, bug B blocks bug C, and bug C blocks bug A.
// Notice circular dependencies may have an arbitrary length, ie., bug 1 → bug 2 → … → bug N-1→ bug N → bug 1)
function query6(defects) {
  // Create adjacency list representation of the graph
  // Implement a set to determine if a node is currently being visited
  // Use code from class for DFS
  let adjacencyList = new Map();
  defects.forEach((defect) => {
    adjacencyList.set(defect.bug_id, defect.blocks);
  });

  let result = false;
  // Use DFS to detect cycles
  // Run DFS for each node
  defects
    .filter((defects) => defects.length > 0)
    .forEach((defect) => {
      result = result || dfs(defect.bug_id, adjacencyList);
      // If we find a node that is currently being visited, we have a cycle
      if (result == true) {
        return true;
      }
    });
  return result;
}

// Compare function to sort by fixed defect count, then by username alphabetically
function compareUsernameFixed(a, b) {
  if (a[1] > b[1]) {
    return -1;
  } else if (a[1] < b[1]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  } else if (a[0] > b[0]) return 1;
  else return 0;
}

/**
 * Performs a Depth-First Search (DFS) starting from 'startNode'.
 * @param {number} startNode - The bug_id from which to begin DFS.
 * @param {Map} adjacencyList - each bug_id mapped to its blocked array.
 * @returns True or False: whether a cycle is detected in the blocks graph.
 */
function dfs(startNode, adjacencyList) {
  const visited = new Set();
  const stack = [startNode];

  while (stack.length > 0) {
    const current = stack.pop();
    // check if node has already been visited
    if (!visited.has(current)) {
      visited.add(current); // mark as visited
      // traverse children nodes
      let children = adjacencyList.get(current);
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    } else {
      return true; // cycle detected
    }
  }
  return false;
}

let defects = loadObjects().slice(1); // skip the header row
// console.log(defects[0]);
console.log(
  "Query 1 result (How many defects have been solved by developers):",
  query1(defects),
);
console.log(
  'Query 2: (the number of defects  whose summary attribute include the word "buildbot" regardless of case)',
  query2(defects),
);
console.log(
  "Query 3: What percentage of issues are still in the backlog (status!=RESOLVED)?",
  query3(defects),
);
console.log("Query 4: ", query4(defects));
console.log("Query 5: ", query5(defects));
console.log("Query 6: ", query6(defects));
