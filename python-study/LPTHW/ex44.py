

class Parent(object):

    def implicit(self):
        print("PARENT implicit()")

    def override(self):
        print("PARENT override()")

    def altered(self):
        print("PARENT altered()")

class Child(Parent):

    def __init__(self):
        self.other = Other()

    # if no def for implicit(), causes inheritance from Parent
    def implicit(self):
        self.other.implicit() # if calling from a module

    def override(self):
        print("CHILD override()")

    def altered(self):
        print("CHILD, BEFORE PARENT altered()")
        # super(Child, self).altered()
        self.other.altered() # if calling from a module
        print("CHILD, AFTER PARENT altered()")


class Other(object):

    def override(self):
        print("OTHER override()")

    def implicit(self):
        print("OTHER implicit()")

    def altered(self):
        print("OTHER altered()")

dad = Parent()
son = Child()

# implicit inheritance
dad.implicit()
son.implicit()

# override explicitly
dad.override()
son.override()

# alter before or after
dad.altered()
son.altered()
