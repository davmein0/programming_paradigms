from collections import deque

def bfs_traversal(graph, initial_node):
    # your implementation here
    # your function will return a list!
    
    # Keep track of visited nodes to avoid repeats
    visited = set()
    visited.add(initial_node)

    # Implement a deque (queue) for First In First Out node processing
    queue = deque([initial_node])

    # Output list
    traversal = []
    while queue:
        # Process each node, add its neighbors if haven't been added
        node = queue.popleft()
        traversal.append(node)
        for nei in graph[node]:
            if nei in visited:
                continue
            queue.append(nei)
            visited.add(nei)

    return traversal


if __name__ == "__main__":
    # Test case 1:
    graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]}
    initial_node = "+" 
    print("Test case 1:")
    print(bfs_traversal(graph, initial_node))  # ['+', '*', 3, 2, 7]

    # Test case 2:
    graph = {0: [1,3], 1:[2,3], 2:[3,1], 3:[0,1]}
    initial_node = 0
    print("Test 2:")
    print(bfs_traversal(graph, initial_node))
