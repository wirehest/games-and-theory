## Animal is-a object
class Animal(object):
    pass

## Class Dog is-an Animal
class Dog(Animal):

    def __init__(self, name):
        ## Class Dog has-a name
        self.name = name

## Class Cat is-an Animal
class Cat(Animal):

    def __init__(self, name):
        ## Class Cat has-a name
        self.name = name

## Class Person is-an object
class Person(object):

    def __init__(self, name):
        ## Class Person has-a name
        self.name = name

        ## Person has-a pet
        self.pet = None

## Class employee is-a Person
class Employee(Person):

    def __init__(self, name, salary):
        ## Employee has-a name
        super(Employee, self).__init__(name)
        ## class Employee has-a salary
        self.salary = salary

## class Fish is-an object
class Fish(object):
    pass

## class Salmon is-a Fish
class Salmon(Fish):
    pass

##class Halibut is-a Fish
class Halibut(Fish):
    pass

## rover is-a Dog
rover = Dog("Rover")

## satan is-a Cat
satan = Cat("Satan")

## Mary is-a Person
mary = Person("Mary")

# Mary has-a pet
mary.pet = satan

# Frank is-an Employee
frank = Employee("Frank", 120000)

# Frank has-a pet
frank.pet = rover

# flipper is-a Fish
flipper = Fish()

# crouse is-a Salmon
crouse = Salmon()

# harry is-a Halibut
harry = Halibut()
