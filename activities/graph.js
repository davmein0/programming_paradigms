let graph = {
  adjList: new Map(),

  // Add a node (string) to the graph's adjacency list
  addNode: function (n) {
    if (!this.adjList.has(n)) {
      this.adjList.set(n, []);
    }
  },
  // Add a bidirectional edge between two nodes
  addEdge: function (n1, n2) {
    this.addNode(n1);
    this.addNode(n2);
    this.adjList.get(n1).push(n2);
    this.adjList.get(n2).push(n1);
  },
  /*
   * Peforms a BFS traversal from the start node
   * @param {string} startNode - The node from which to begin the BFS
   * @returns {string[]} The order which the nodes were visited
   */
  bfs: function (startNode) {
    if (!this.adjList.has(startNode)) return [];

    // Establish a queue, set of visited nodes, and traversal list (result)
    let visited = new Set();
    const queue = [];
    const result = [];

    // Initialize with start node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      // Pop a node from the left of queue
      let node = queue.shift();
      result.push(node);
      visited.add(node);
      // Only add neighboring nodes to be processed if not visited
      this.adjList.get(node).forEach((n) => {
        if (!visited.has(n)) {
          queue.push(n);
        }
      });
    }
    return result;
  },
  /**
   * Performs a Depth-First Search (DFS) starting from 'startNode'.
   * @param {string} startNode - The node from which to begin DFS.
   * @returns {string[]} The order in which the nodes were visited.
   */
  dfs: function (startNode) {
    if (!this.adjList.has(startNode)) return [];
    const visited = new Set();
    const stack = [startNode];
    const result = [];

    while (stack.length > 0) {
      const current = stack.pop();
      // check if node has already been visited
      if (!visited.has(current)) {
        visited.add(current); // mark as visited
        result.push(current); // add to the output
        // traverse children nodes
        let children = this.adjList.get(current);
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
    return result;
  },

  toString: function () {
    let result = ["digraph G{ "];
    Array.from(this.adjList).forEach((v, k) => {
      for (let i = 0; i < v.length; i++) {
        result.push(`\t"${k}" -> "${v[i]}";`);
      }
    });
    result.push("}");

    return result.join("\n");
  },
};

graph.addEdge("+", "*");
graph.addEdge("+", 3);
graph.addEdge("*", 2);
graph.addEdge("*", 7);
console.log(graph + "");
console.log(graph.dfs("+"));
console.log(graph.bfs("+"));
