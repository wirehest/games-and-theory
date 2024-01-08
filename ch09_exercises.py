#!

import logging
import random           # Import for ex9-13.

import restaurant                     # Import custom module for ex9-10.
import user_classes_complete as ucc   # Import custom module for ex9-11.
import admin_privileges as ap         # Import custom module for ex9-12.

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
logging.disable(logging.CRITICAL)

# 9-1. Restaurant: Make a class called Restaurant. The __init__() method 
# for Restaurant should store two attributes: a restaurant_name and a 
# cuisine_type. Make a method called describe_restaurant() that prints 
# these two pieces of information, and a method called open_restaurant() 
# that prints a message indicating that the restaurant is open. Make an 
# instance called restaurant from your class. Print the two attributes 
# individually, and then call both methods. 
def ex9_1():
    class Restaurant:
        """A model of a restaurant."""
        def __init__(self, restaurant_name, cuisine_type):
            self.restaurant_name = restaurant_name
            self.cuisine_type = cuisine_type

        def describe_restaurant(self):
            """Prints the restaurant name and cuisine type."""
            print(f"Restaurant name: {self.restaurant_name.title()}")
            print(f"Cuisine: {self.cuisine_type.title()}")

        def open_restaurant(self):
            """Prints that the restaurant is open."""
            print("The restaurant is open")

    restaurant = Restaurant('Panda Express', 'Chinese')

    print(restaurant.restaurant_name)
    print(restaurant.cuisine_type)

    restaurant.describe_restaurant()
    restaurant.open_restaurant()

# 9-2. Three Restaurants: Start with your class from Exercise 9-1. 
# Create three different instances from the class, and call 
# describe_restaurant() for each instance. 
def ex9_2():
    class Restaurant:
        """A model of a restaurant."""
        def __init__(self, restaurant_name, cuisine_type):
            """Initialize attributes."""
            self.restaurant_name = restaurant_name
            self.cuisine_type = cuisine_type

        def describe_restaurant(self):
            """Prints the restaurant name and cuisine type."""
            print(f"Restaurant name: {self.restaurant_name.title()}")
            print(f"Cuisine: {self.cuisine_type.title()}")

        def open_restaurant(self):
            """Prints that the restaurant is open."""
            print("The restaurant is open")

    restaurant1 = Restaurant('Popeye\'s Chicken', 'Fast Food')
    restaurant2 = Restaurant('McDonald\'s', 'Fast Food')
    restaurant3 = Restaurant('Chipotle\'s', 'Mexican')

    restaurant1.describe_restaurant()
    restaurant2.describe_restaurant()
    restaurant3.describe_restaurant()

# 9-3. Users: Make a class called User. Create two attributes called 
# first_name and last_name, and then create several other attributes 
# that are typically stored in a user profile. Make a method called 
# describe_user() that prints a summary of the user’s information. Make 
# another method called greet_user() that prints a personalized greeting 
# to the user. 
# Create several instances representing different users, and call both 
# methods for each user. 
def ex9_3():
    class User:
        """Models a user profile."""
        def __init__(self, first_name, last_name, gender, age, birthdate):
            """Initialize attributes."""
            self.first_name = first_name
            self.last_name = last_name
            self.gender = gender
            self.age = age
            self.birthdate = birthdate

        def describe_user(self):
            """Prints all attributes."""
            print(f"First Name: {self.first_name.title()}")
            print(f"Last Name: {self.last_name.title()}")
            print(f"Gender: {self.gender.title()}")
            print(f"Age: {self.age}")
            print(f"Birthdate: {self.birthdate}")            

        def greet_user(self):
            """Greets user, customized to their first name."""
            print(f"Hi {self.first_name.title()}! Hope you're well!")

    able_baker = User('able', 'baker', 'm', 32, 'Jan. 3')
    charlie_dog = User('charlie,', 'dog', 'f', 28, 'Feb. 6')
    easy_fox = User('easy', 'fox', 'f', 21, 'June 9')

    print()
    able_baker.describe_user()
    able_baker.greet_user()

    print()
    charlie_dog.describe_user()
    charlie_dog.greet_user()

    print()
    easy_fox.describe_user()
    easy_fox.greet_user()

# 9-4. Number Served: Start with your program from Exercise 9-1 (page 
# 162). Add an attribute called number_served with a default value of 0. 
# Create an instance called restaurant from this class. Print the number 
# of customers the restaurant has served, and then change this value and
# print it again. 
# Add a method called set_number_served() that lets you set the number 
# of customers that have been served. Call this method with a new number 
# and print the value again. 
# Add a method called increment_number_served() that lets you increment 
# the number of customers who’ve been served. Call this method with any 
# number you like that could represent how many customers were served 
# in, say, a day of business.
def ex9_4():
    class Restaurant:
        """A model of a restaurant."""
        def __init__(self, restaurant_name, cuisine_type):
            self.restaurant_name = restaurant_name
            self.cuisine_type = cuisine_type
            self.number_served = 0

        def describe_restaurant(self):
            """Prints the restaurant name and cuisine type."""
            print(f"Restaurant name: {self.restaurant_name.title()}")
            print(f"Cuisine: {self.cuisine_type.title()}")

        def open_restaurant(self):
            """Prints that the restaurant is open."""
            print("The restaurant is open")

        def set_number_served(self, number_served):
            """Sets the number of customers served."""
            self.number_served = number_served

        def increment_number_served(self):
            """Increments the number_served."""
            self.number_served += 1

    restaurant = Restaurant('Panda Express', 'Chinese')

    print(f"Restaurant Name: {restaurant.restaurant_name.title()}")
    print(f"Cuisine: {restaurant.cuisine_type.title()}")
    print(f"Number served: {restaurant.number_served}")

    print("Directly changing # served:")
    restaurant.number_served = 5
    print(f"Number served: {restaurant.number_served}")

    print("Changing # served via method set_number_served():")
    restaurant.set_number_served(20)
    print(f"Number served: {restaurant.number_served}")

    print("Incrementing # served via method increment_number_served():")
    restaurant.increment_number_served()
    print(f"Number served: {restaurant.number_served}")

# 9-5. Login Attempts: Add an attribute called login_attempts to your 
# User class from Exercise 9-3 (page 162). Write a method called 
# increment_login_attempts() that increments the value of login_attempts 
# by 1. Write another method called reset_login_attempts() that resets 
# the value of login_attempts to 0. 
# Make an instance of the User class and call increment_login_attempts() 
# several times. Print the value of login_attempts to make sure it was 
# incremented properly, and then call reset_login_attempts(). Print 
# login_attempts again to make sure it was reset to 0. 
def ex9_5():
    class User:
        """Models a user profile."""
        def __init__(
                self, first_name, last_name, gender, 
                age, birthdate):
            """Initialize attributes."""
            self.first_name = first_name
            self.last_name = last_name
            self.gender = gender
            self.age = age
            self.birthdate = birthdate
            self.login_attempts = 0

        def describe_user(self):
            """Prints all attributes."""
            print(f"First Name: {self.first_name.title()}")
            print(f"Last Name: {self.last_name.title()}")
            print(f"Gender: {self.gender.title()}")
            print(f"Age: {self.age}")
            print(f"Birthdate: {self.birthdate}")            

        def greet_user(self):
            """Greets user, customized to their first name."""
            print(f"Hi {self.first_name.title()}! Hope you're well!")

        def increment_login_attempts(self):
            self.login_attempts += 1

        def reset_login_attempts(self):
            self.login_attempts = 0

    able_baker = User('able', 'baker', 'm', 32, 'Jan. 3')
    
    print(f"Login attempts: {able_baker.login_attempts}")
    
    for i in range(10):
        able_baker.increment_login_attempts()

    print(f"Login attempts: {able_baker.login_attempts}")

    able_baker.reset_login_attempts()

    print(f"Login attempts: {able_baker.login_attempts}")

# 9-6. Ice Cream Stand: An ice cream stand is a specific kind of 
# restaurant. Write a class called IceCreamStand that inherits from the 
# Restaurant class you wrote in Exercise 9-1 (page 162) or Exercise 9-4 
# (page 166). Either version of the class will work; just pick the one 
# you like better. 
# Add an attribute called flavors that stores a list of ice cream 
# flavors. Write a method that displays these flavors. Create an 
# instance of IceCreamStand, and call this method. 
def ex9_6():
    class Restaurant:
        """A model of a restaurant."""
        def __init__(self, restaurant_name, cuisine_type):
            self.restaurant_name = restaurant_name
            self.cuisine_type = cuisine_type

        def describe_restaurant(self):
            """Prints the restaurant name and cuisine type."""
            print(f"Restaurant name: {self.restaurant_name.title()}")
            print(f"Cuisine: {self.cuisine_type.title()}")

        def open_restaurant(self):
            """Prints that the restaurant is open."""
            print("The restaurant is open")

    class IceCreamStand(Restaurant):
        """A model of an ice cream stand, subclass of Restaurant."""
        def __init__(self, restaurant_name, cuisine_type):
            """Initialize attributes of Restaurant."""
            super().__init__(restaurant_name, cuisine_type)
            self.flavors = ['vanilla', 'chocolate', 'strawberry']

        def display_flavors(self):
            """Displays the flavors offered by the ice cream stand."""
            print(f"{self.restaurant_name.title()} offers the following"
                " flavors: ")
            for flavor in self.flavors:
                print(flavor.title())

    baskin = IceCreamStand('baskin', 'ice cream')

    baskin.describe_restaurant()
    baskin.display_flavors()
    
# 9-7. Admin: An administrator is a special kind of user. Write a class 
# called Admin that inherits from the User class you wrote in Exercise 
# 9-3 (page 162) or Exercise 9-5 (page 167). Add an attribute, 
# privileges, that stores a list of strings like "can add post", "can 
# delete post", "can ban user", and so on. Write a method called 
# show_privileges() that lists the administrator’s set of privileges. 
# Create an instance of Admin, and call your method. 
def ex9_7():
    class User:
        """Models a user profile."""
        def __init__(self, first_name, last_name, gender, age, birthdate):
            """Initialize attributes."""
            self.first_name = first_name
            self.last_name = last_name
            self.gender = gender
            self.age = age
            self.birthdate = birthdate

        def describe_user(self):
            """Prints all attributes."""
            print(f"First Name: {self.first_name.title()}")
            print(f"Last Name: {self.last_name.title()}")
            print(f"Gender: {self.gender.title()}")
            print(f"Age: {self.age}")
            print(f"Birthdate: {self.birthdate}")            

        def greet_user(self):
            """Greets user, customized to their first name."""
            print(f"Hi {self.first_name.title()}! Hope you're well!")

    class Admin(User):
        """Models an admin profile."""
        def __init__(self, first_name, last_name, gender, age, birthdate):
            """Initialize User attributes."""
            super().__init__(first_name, last_name, gender, age, birthdate)
            self.privileges = [
                'can add post', 'can delete post',
                'can ban user', 'can delete user'
                ]
        
        def show_privileges(self):
            """Lists the administrator's privileges."""
            print(f"Admin {self.first_name.title()} {self.last_name.title()}"
                "")
            for privilege in self.privileges:
                print(privilege)

    god = Admin('peter', 'queen', 'm', 32, 'Jan. 6')
    god.show_privileges()

# 9-8. Privileges: Write a separate Privileges class. The class should 
# have one attribute, privileges, that stores a list of strings as 
# described in Exercise 9-7. 
# Move the show_privileges() method to this class. Make a Privileges 
# instance as an attribute in the Admin class. Create a new instance of 
# Admin and use your method to show its privileges. 
def ex9_8():
    class Privileges:
        """Representation of priviliges."""
        def __init__(self):
            """Initialize list of privileges."""
            self.privileges = [
                'can add post', 'can delete post',
                'can ban user', 'can delete user'
                ]

        def show_privileges(self):
            """Lists the administrator's privileges."""
            for privilege in self.privileges:
                print(privilege)

    class User:
        """Models a user profile."""
        def __init__(self, first_name, last_name, gender, age, birthdate):
            """Initialize attributes."""
            self.first_name = first_name
            self.last_name = last_name
            self.gender = gender
            self.age = age
            self.birthdate = birthdate

        def describe_user(self):
            """Prints all attributes."""
            print(f"First Name: {self.first_name.title()}")
            print(f"Last Name: {self.last_name.title()}")
            print(f"Gender: {self.gender.title()}")
            print(f"Age: {self.age}")
            print(f"Birthdate: {self.birthdate}")            

        def greet_user(self):
            """Greets user, customized to their first name."""
            print(f"Hi {self.first_name.title()}! Hope you're well!")

    class Admin(User):
        """Models an admin profile."""
        def __init__(self, first_name, last_name, gender, age, birthdate):
            """Initialize User attributes."""
            super().__init__(first_name, last_name, gender, age, birthdate)
            self.privileges = Privileges()

    god = Admin('peter', 'queen', 'm', 32, 'Jan. 6')    
    god.privileges.show_privileges()

# 9-9. Battery Upgrade: Use the final version of electric_car.py from 
# this section. Add a method to the Battery class called 
# upgrade_battery(). This method should check the battery size and set 
# the capacity to 65 if it isn’t already. Make an electric car with a 
# default battery size, call get_range() once, and then call get_range() 
# a second time after upgrading the battery. You should see an increase 
# in the car’s range. 
def ex9_9():
    class Car:
        """A simple attempt to represent a car."""

        def __init__(self, make, model, year):
            """Initialize attributes to describe a car."""
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0

        def get_descriptive_name(self):
            """Return a neatly formatted descriptive name."""
            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()

        def read_odometer(self):
            """Print a statement showing the car's mileage."""
            print(f"This car has {self.odometer_reading} miles on it.")

        def update_odometer(self, mileage):
            """Set the odometer reading to the given value."""
            if mileage >= self.odometer_reading:
                self.odometer_reading = mileage
            else:
                print("You can't roll back an odometer!")

        def increment_odometer(self, miles):
            """Add the given amount to the odometer reading."""
            self.odometer_reading += miles

    class Battery:
        """A simple attempt to model a battery for an electric car."""
        
        def __init__(self, battery_size=40):
            """Initialize the battery's attributes."""
            self.battery_size = battery_size

        def describe_battery(self):
            """Print a statement describing the battery size."""
            print(f"This car has a {self.battery_size}-kWh battery.")

        def get_range(self):
            """Print a statement about the range this battery provides."""
            if self.battery_size == 40:
                range = 150
            elif self.battery_size == 65:
                range = 225

            print(f"This car can go about {range} miles on a full charge.")

        def upgrade_battery(self):
            """Upgrades battery capacity to 65 (ex 9-9)."""
            if self.battery_size < 65:
                self.battery_size = 65
            else:
                pass

    class ElectricCar(Car):
        """Represent aspects of a car, specific to electric vehicles."""

        def __init__(self, make, model, year):
            """Initialize attributes of the parent class. Then initialize attributes specific to an electric car."""
            super().__init__(make, model, year)
            self.battery = Battery()

    volt = ElectricCar('chevrolet', 'volt', 2024)
    volt.battery.get_range()
    volt.battery.upgrade_battery()
    volt.battery.get_range()

# 9-10. Imported Restaurant: Using your latest Restaurant class, store 
# it in a module. Make a separate file that imports Restaurant. Make a 
# Restaurant instance, and call one of Restaurant’s methods to show that 
# the import statement is working properly. 
def ex9_10():
    ice_cream_place = restaurant.IceCreamStand('coldstone', 'ice cream')
    ice_cream_place.display_flavors()

# 9-11. Imported Admin: Start with your work from Exercise 9-8 (page 
# 173). Store the classes User, Privileges, and Admin in one module. 
# Create a separate file, make an Admin instance, and call 
# show_privileges() to show that everything is working correctly. 
def ex9_11():
    god = ucc.Admin('peter', 'queen', 'm', 32, 'Jan. 6')    
    god.privileges.show_privileges()

# 9-12. Multiple Modules: Store the User class in one module, and store 
# the Privileges and Admin classes in a separate module. In a separate 
# file, create an Admin instance and call show_privileges() to show that 
# everything is still working correctly. 
def ex9_12():
    uco_user = ap.Admin('george', 'how', 'm', 22, 'Mar. 12')
    uco_user.privileges.show_privileges()

# 9-13. Dice: Make a class Die with one attribute called sides, which 
# has a default value of 6. Write a method called roll_die() that prints 
# a random number between 1 and the number of sides the die has. Make a 
# 6-sided die and roll it 10 times. 
# Make a 10-sided die and a 20-sided die. Roll each die 10 times.
def ex9_13():
    class Die:
        """A class representing dice."""
        def __init__(self, sides=6):
            """Initializes sides."""
            self.sides = sides

        def roll_die(self, rolls):
            """Rolls the die the specified number of rolls."""
            print(f"\nRolling {self.sides}-sided dice {rolls} times.")
            for roll in range(rolls):
                logging.info(f"roll: {roll}\trolls: {rolls}")
                separator = '.' if roll == (rolls - 1) else ', '
                print(random.randint(1, self.sides), end=separator)
            print()

    six_sided_die = Die()
    six_sided_die.roll_die(10)

    ten_sided_die = Die(10)
    ten_sided_die.roll_die(10)

    twenty_sided_die = Die(20)
    twenty_sided_die.roll_die(10)

# 9-14. Lottery: Make a list or tuple containing a series of 10 numbers 
# and 5 letters. Randomly select 4 numbers or letters from the list and 
# print a message saying that any ticket matching these 4 numbers or 
# letters wins a prize. 
def ex9_14():
    lottery_tickets = [
        0, 1, 2, 3,
        4, 5, 6, 7,
        8, 9, 'A', 'B',
        'C', 'D', 'E',
        ]
    winner = []

    print("Any ticket with the following four numbers/letters are winners!")
    for i in range(4):
        pick = random.choice(lottery_tickets)
        winner.append(pick)
        lottery_tickets.remove(pick)

    print(winner)
    
# 9-15. Lottery Analysis: You can use a loop to see how hard it might be 
# to win the kind of lottery you just modeled. Make a list or tuple 
# called my_ticket. Write a loop that keeps pulling numbers until your 
# ticket wins. Print a message reporting how many times the loop had to 
# run to give you a winning ticket. 
def ex9_15():
    lottery_tickets = [
        0, 1, 2, 3,
        4, 5, 6, 7,
        8, 9, 'A', 'B',
        'C', 'D', 'E',
        ]
    my_ticket = []
    picked = []
    pick_counter = 0
    active = True

    def pick_ticket(lottery_tickets):
        """Picks a random ticket."""
        ticket = []
        lottery_tickets_copy = lottery_tickets[:]
        for i in range(4):
            pick = random.choice(lottery_tickets_copy)
            ticket.append(pick)
            lottery_tickets_copy.remove(pick)

        return ticket

    def check_my_ticket(my_ticket, picked):
        a = my_ticket[0] in picked
        b = my_ticket[1] in picked
        c = my_ticket[2] in picked
        d = my_ticket[3] in picked
        check_outcome = not(a * b * c * d)

        return check_outcome

    my_ticket = pick_ticket(lottery_tickets)
    print(f"my_ticker: {my_ticket}")

    lottery_tickets_while_copy = lottery_tickets[:]
    
    while active == True:
        pick = random.choice(lottery_tickets_while_copy)
        print(pick, end=' ')
        lottery_tickets_while_copy.remove(pick)
        picked.append(pick)
        pick_counter += 1
        active = check_my_ticket(my_ticket, picked)

    print(f"\nLoop ran {pick_counter} times.")

# 9-16. Python Module of the Week: One excellent resource for exploring 
# the Python standard library is a site called Python Module of the 
# Week. Go to https://pymotw.com and look at the table of contents. Find 
# a module that looks interesting to you and read about it, perhaps 
# starting with the random module. 
def ex9_16():
    pass


while True:
    try:
        chapter = 9
        exercises = '1-16'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")
