# Polymorphism and abstraction
print("\nPolymorphism and abstraction:")
class Book:
    def __init__(self, title):
        self.title = title

    def get_book_type(self):
        pass

class DigitalBook(Book):
    def get_book_type(self):
        return "Digital"

book = DigitalBook("Test")
print(book)

# Encapsulation
print("\nEncapsulation:")
class Employees:
    def __init__(self):
        self.__employees = {}  # private data member

    def add_employee(self, eid, name):  # method to operate on private data
        self.__employees[eid] = name

employees = Employees()
employees.add_employee(1, "Joao")
print(employees)

# Lists
print("\nLists:")
list_example = [3, 1, 4, 2]
print("Original:", list_example)

# In‑place ascending sort
list_example.sort()
print("Sorted ascending (in‑place):", list_example)

# In‑place descending sort
list_example.sort(reverse=True)
print("Sorted descending (in‑place):", list_example)

# Using sorted() to keep original intact
nums = [10, -5, 7, 3]
print("Original nums:", nums)
print("sorted(nums):", sorted(nums))  # ascending copy
print("nums after sorted():", nums)   # unchanged

# Custom key – sort strings by length
words = ["apple", "fig", "banana", "kiwi"]
print("Words sorted by length:", sorted(words, key=len))

# Sorting list of dicts by a field
records = [{"value": 5, "name": "test1"}, {"value": 6, "name": "test2"}, {"value": 1, "name": "alpha"}]
print("Sorted records by 'value':", sorted(records, key=lambda x: x["value"]))

# Sorting list of objects by attribute
class Item:
    def __init__(self, value, name):
        self.value = value
        self.name = name
    def __repr__(self):
        return f"Item(value={self.value}, name='{self.name}')"

items = [Item(5, "test1"), Item(6, "test2"), Item(2, "beta")]
print("Items sorted by value desc:", sorted(items, key=lambda it: it.value, reverse=True))

# Stacks
print("\nStacks:")
stack = []
stack.append(1)
stack.append(2)
print(stack)
stack.pop()
print(stack)

# Objects (dict as hashmap)
print("\nObjects:")
obj = {}
obj_id = 1
if obj_id not in obj:
    obj[obj_id] = []
obj[obj_id].append("Test")
print(obj)

# Sets
print("\nSets:")
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print("Union:", set_a | set_b)
print("Intersection:", set_a & set_b)
print("Difference:", set_a - set_b)
print("Is subset?", {1, 2} <= set_a)

# Queues (FIFO)
print("\nQueues:")
from collections import deque
queue = deque()
queue.append("a")
queue.append("b")
print(queue)
queue.popleft()
print(queue)

# Priority Queue / Heap
print("\nPriority Queue (Heap):")
import heapq
nums_heap = [5, 3, 7, 1]
heapq.heapify(nums_heap)
heapq.heappush(nums_heap, 2)
print([heapq.heappop(nums_heap) for _ in range(len(nums_heap))])

# Linked List
print("\nLinked List:")
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

def build_linked_list(values):
    head = current = ListNode(values[0])
    for v in values[1:]:
        current.next = ListNode(v)
        current = current.next
    return head

def linked_list_to_list(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out

head = build_linked_list([1, 2, 3])
print(linked_list_to_list(head))

# Trees (Binary Search Tree example)
print("\nTrees (Binary Search Tree):")
class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if not self.root:
            self.root = TreeNode(key)
            return
        curr = self.root
        while True:
            if key < curr.key:
                if curr.left:
                    curr = curr.left
                else:
                    curr.left = TreeNode(key)
                    return
            else:
                if curr.right:
                    curr = curr.right
                else:
                    curr.right = TreeNode(key)
                    return

    def inorder(self):
        def _inorder(node):
            if node:
                _inorder(node.left)
                keys.append(node.key)
                _inorder(node.right)
        keys = []
        _inorder(self.root)
        return keys

bst = BinarySearchTree()
for k in [4, 2, 5, 1, 3]:
    bst.insert(k)
print(bst.inorder())  # [1, 2, 3, 4, 5]

# Graphs (BFS traversal)
print("\nGraphs (BFS):")
from collections import defaultdict

graph = defaultdict(list)
edges = [(1, 2), (1, 3), (2, 4), (3, 4)]
for u, v in edges:
    graph[u].append(v)

def bfs(start):
    visited = {start}
    q = deque([start])
    order = []
    while q:
        node = q.popleft()
        order.append(node)
        for nei in graph[node]:
            if nei not in visited:
                visited.add(nei)
                q.append(nei)
    return order

print(bfs(1))  # [1, 2, 3, 4]

# Recursion example
print("\nRecursion (Factorial):")
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

print(factorial(5))

# Interface / Abstraction with ABC
print("\nInterface with ABC (abstract base class):")
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

sq = Square(4)
print(sq.area())
