
# Moves a robot 'n' times, starting at (0, 0) facing North
# After each step, rotate robot 90 degrees clockwise and increments step size
# Return a list of the robot's position (x, y) after each move
def move_robot(n):
    # Initialize position
    x, y = 0, 0
    
    # [up, right, down, left]
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)] 

    # Stores List of positions, initialize with the origin
    positions = [(x,y)]

    # Simulate moving 'n' steps
    for i in range(n):
        # Rotate clockwise, i+1 = step size
        direction = directions[i % 4]
        dx, dy = direction
        x += dx * (i + 1)
        y += dy * (i + 1)
        positions.append((x, y))

    return positions

# Test move_robot(n)
if __name__ == '__main__':
    print("4 steps")
    for v in move_robot(4):
        print(v)
    
    print("\n0 steps")
    for v in move_robot(0):
        print(v)

    print("\n2 steps")
    for v in move_robot(2):
        print(v)

    print('\n12 steps')
    for v in move_robot(12):
        print(v)