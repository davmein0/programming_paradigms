let graph = {
  adjList: new Map(),

  addNode: function (n) {
    if (!this.adjList.has(n)) {
      this.adjList.set(n, []);
    }
  },
  addEdge: function (n1, n2) {
    this.adjList.get(n1).push(n2);
    this.adjList.get(n2).push(n1);
  },
  bfs: function (startNode) {
    let visited = new Set();
    const queue = [];
    const result = [];

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node);
      visited.add(node);
      adjList[node].forEach((n) => {
        if (!(n in visited)) {
          queue.push(n);
        }
      });
    }
    return result;
  },
};
