from collections import deque

# Node: has value, pointer to right child node, pointer to left child node
class Node:
	def __init__(self, value, left, right):
		self.value = value
		self.left = left
		self.right = right
	
	def __str__(self):
		return self.value

def traverse(root):
	# Check if root is valid. If not, return empty list
	if root is None or type(root) != Node:
		return []
	
	visited = [] # Stores list of nodes in traversed order
	children_layer = [root] # Next layer to be processed

	# 0 is left traversal, 1 is right traversal
	direction = 1 
	while len(children_layer) > 0:
		# Current layer is the layer of nodes being processed
		# reverse in order to process most recently added children first
		current_layer = children_layer[::-1]
		children_layer = []
		for node in current_layer:
			visited.append(node)
			# If left traversal, append left child before right.
			if direction == 0:
				if node.left:
					children_layer.append(node.left)
				if node.right:
					children_layer.append(node.right)
			# Right traversal: right child before left
			else:
				if node.right:
					children_layer.append(node.right)
				if node.left:
					children_layer.append(node.left)
					
		# Switch directions
		direction = 1 - direction
	return visited

# Test traverse(root)
if __name__ == '__main__':
	print('Test case 1:')
	e = Node("E", None, None)
	d = Node("D", None, None)
	c = Node("C", d, e)
	b = Node("B", None, None)
	root = Node("A", b, c)
	for v in traverse(root):
		print(v)

	print("Test case 2:")
	gg = Node("G", None, None)
	f = Node("F", None, None)
	e = Node("E", None, None)
	d = Node("D", None, None)
	c = Node("C", f, gg)
	b = Node("B", d, e)
	root = Node("A", b, c)
	for v in traverse(root):
		print(v)

	print('Test case 3:')
	node9 = Node("Node9", None, None)
	node10 = Node("Node10", None, None)
	node7 = Node("Node7", None, None)
	node8 = Node("Node8", node9, node10)
	node5 = Node("Node5", None, None) 
	node6 = Node("Node6", node7, node8)
	node3 = Node("Node3", None, None)  
	node4 = Node("Node4", node5, node6)
	node1 = Node("Node1", node3, node4)
	node2 = Node("Node2", None, None)  
	root = Node("Root", node1, node2)
	for v in traverse(root):
		print(v)

	# More test cases
	root = Node("A", None, None)

	for v in traverse(root):
		print(v)

	b = Node("B", None, None)
	c = Node("C", None, None)
	root = Node("A", b, c)

	for v in traverse(root):
		print(v)

	d = Node("D", None, None)
	e = Node("E", None, None)
	c = Node("C", d, e)
	b = Node("B", None, None)
	root = Node("A", b, c)

	for v in traverse(root):
		print(v)

	a = Node("LA", None, None)
	b = Node("LA", None, None)
	root = Node("SF", a, b)

	for v in traverse(root):
		print(v)

	node4 = Node("4", None, None)
	node5 = Node("5", None, None)
	node2 = Node("2", node4, node5)
	node3 = Node("3", None, None)
	root = Node("1", node2, node3)

	for v in traverse(root):
		print(v)