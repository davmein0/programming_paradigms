import math
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def print(self):
        print(f"({self.x}, {self.y})")

def distance(p1, p2):
    dx, dy = p1.x - p2.x, p1.y - p2.y
    return math.sqrt(dx*dx + dy*dy)

if __name__ == "__main__":
    p1 = Point(1, 2)
    p2 = Point(1, 3)
    p3 = Point(10, 12)

    p1.print()
    p2.print()
    p3.print()

    print("Distance between p1 and p3: ")
    print(distance(p1, p3))
    

