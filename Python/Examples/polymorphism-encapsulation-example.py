# Base class for different types of library users
class Member:
    def __init__(self, name):
        self.name = name

    def check_out_book(self, book):
        print(f"{self.name} checked out {book.get_book_type()} book {book.title}.")

# Base class for different types of books
class Book:
    def __init__(self, title):
        self.title = title

    def get_book_type(self):
        pass

# Inherits from Book, represents a digital book
class DigitalBook(Book):
    def get_book_type(self):
        return "Digital"

# Inherits from Book, represents a physical book
class PhysicalBook(Book):
    def get_book_type(self):
        return "Physical"

# Library class that manages members and books
class Library:
    def __init__(self):
        self.members = []
        self.books = []

    def add_member(self, member):
        self.members.append(member)

    def add_book(self, book):
        self.books.append(book)

my_library = Library()

alice = Member("Alice")
bob = Member("Bob")

my_library.add_member(alice)
my_library.add_member(bob)

digital_book = DigitalBook("The Python Handbook")
physical_book = PhysicalBook("Learning Python Design Patterns")

my_library.add_book(digital_book)
my_library.add_book(physical_book)

alice.check_out_book(digital_book)  # Prints: Alice checked out Digital book The Python Handbook.
bob.check_out_book(physical_book)   # Prints: Bob checked out Physical book Learning Python Design Patterns.