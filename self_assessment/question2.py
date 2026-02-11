
class Node:
    """Class for a tree node, with value, left, and right attributes."""
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def tokenize(expression: str) -> list:
    """Tokenizes the input expression into operands and operators."""
    tokens = []
    index = 0
    start_index = 0
    while index < len(expression):
        char = expression[index]
        # Handles negative numbers
        if char == '-' and (index == 0 or expression[index-1] in "+-*/"):
            start_index = index
        # If an operator found, we reached the end of the operand
        elif char in "*-/+":
            # Append the operand and then the operator
            tokens.append(expression[start_index:index])
            tokens.append(expression[index])
            start_index = index + 1
        index += 1

    # Append the last operand
    tokens.append(expression[start_index:index])
    print(tokens)
    return tokens


def text_to_tree(expression: str) -> list:
    # ... solution here ...
    """Tokenizes the expression, turns expression into postfix notation, 
    builds the expression tree, and returns the preorder traversal relationships."""

    token_list = tokenize(expression)
    postfix = create_postfix(token_list)
    stack = []
    relationships = []
    # Processes the postfix expression to build the tree
    for token in postfix:
        if token in "+-*/":
            right = stack.pop()
            left = stack.pop()
            stack.append(Node(token, left, right))
        else:
            stack.append(Node(token))
    
    # 
    root = stack[-1]

    preorder_traversal(root, relationships)
    return relationships


def preorder_traversal(root, relationships):
    """Traverse the tree, add parent-child relationships (strings)
        to the relationships list"""
    if not root:
        return
    # All non-leaf nodes are operators
    if root.left and root.right:
        left = str(f'"{root.value}" -> "{root.left.value}" // left')
        right = str(f'"{root.value}" -> "{root.right.value}" // right')
        relationships.append(left)
        relationships.append(right)
    # Recursively call on children nodes
    preorder_traversal(root.left, relationships)
    preorder_traversal(root.right, relationships)

def create_postfix(token_list: list) -> list:
    """Generate postfix notation, where operators are after their operands."""
    # Higher precedence means you do those operations first in PEMDAS
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2}
    postfix = []
    operators = []

    for token in token_list:
        if token in "+-*/":
            # Process operators with higher precedence first
            while operators and precedence[operators[-1]] >= precedence[token]:
                postfix.append(operators.pop())
            operators.append(token)
        else:
            # Operands get added before their operators
            postfix.append(token)
    # Add all remanining operators
    while operators:
        postfix.append(operators.pop())

    return postfix


def print_output(output: list) -> None:
    for line in output:
        print(line)


if __name__ == "__main__":
    # expression = "2*7+3"  # Test 1
    # expression2 = "-8/-2.2*-10.2"
    # output = text_to_tree(expression2)
    # print(text_to_tree("-8/-2.2*-10.2"))
    # print_output(output)
    # assert text_to_tree("-62.12*146.8-183/106.03") == ['"-" -> "*" // left', '"-" -> "/" // right', '"*" -> "-62.12" // left', '"*" -> "146.8" // right', '"/" -> "183" // left', '"/" -> "106.03" // right'], "Test 1 failed"
    print_output(text_to_tree("-74.4/57-165*176+67/138.7+198-5.0-140.0*46.3"))
    print("Expected:")
    print_output(['"-" -> "-" // left', '"-" -> "*" // right', '"-" -> "+" // left', '"-" -> "5.0" // right', '"*" -> "140.0" // left', '"*" -> "46.3" // right', '"+" -> "+" // left', '"+" -> "198" // right', '"+" -> "-" // left', '"+" -> "/" // right', '"-" -> "/" // left', '"-" -> "*" // right', '"/" -> "67" // left', '"/" -> "138.7" // right', '"/" -> "-74.4" // left', '"/" -> "57" // right', '"*" -> "165" // left', '"*" -> "176" // right'])
    #assert text_to_tree("-74.4/57-165*176+67/138.7+198-5.0-140.0*46.3") == ['"-" -> "-" // left', '"-" -> "*" // right', '"-" -> "+" // left', '"-" -> "5.0" // right', '"*" -> "140.0" // left', '"*" -> "46.3" // right', '"+" -> "+" // left', '"+" -> "198" // right', '"+" -> "-" // left', '"+" -> "/" // right', '"-" -> "/" // left', '"-" -> "*" // right', '"/" -> "67" // left', '"/" -> "138.7" // right', '"/" -> "-74.4" // left', '"/" -> "57" // right', '"*" -> "165" // left', '"*" -> "176" // right'], "Test 2 failed"