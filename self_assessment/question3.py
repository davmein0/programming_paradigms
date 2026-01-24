def tree_to_text(tree, root_node):
    # your implementation here
    # your function will return a string!
    expression = []
    inorder_traversal(tree, root_node, expression)
    # print(expression)

    # Return a string form of the inorder traversal
    return ''.join(expression)

def inorder_traversal(tree, root, expression):
    """Traverse the tree in inorder fashion 
        (left, current, right) recursively"""
    
    # Find the value of the node (after the underscore)
    index = root.rfind('_')
    # Base case: leaf node
    if tree[root] == []:
        expression.append(root[index+1:])
        return
    
    inorder_traversal(tree, tree[root][0], expression)
    expression.append(root[index+1:])
    inorder_traversal(tree, tree[root][1], expression)

# Test example(s)
if __name__ == '__main__':
    tree =  {"n1_+": ["n2_*","n3_-13"], "n2_*":["n4_2","n5_7"], "n4_2":[],"n5_7":[],"n3_-13":[]}
    root_node = "n1_+"
    tree_to_text(tree, root_node)