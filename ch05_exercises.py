#! python3

import random

# 5-1. Conditional Tests: Write a series of conditional tests. Print a 
# statement describing each test and your prediction for the results of 
# each test. Your code should look something like this:
# car = 'subaru'
# print("Is car == 'subaru'? I predict True.")
# print(car == 'subaru')
# print("\nIs car == 'audi'? I predict False.")
# print(car == 'audi')
# Look closely at your results, and make sure you understand why each 
# line evaluates to True or False. Create at least 10 tests. Have at 
# least 5 tests evaluate to True and another 5 tests evaluate to False.
def ex5_1():
    test_string = 'Mopsy'
    test_list = ['Flopsy', 'Peter']
    test_int = 45
    test_bool = True

    print(f"test_string: {test_string}")
    print(f"test_list: {test_list}")
    print(f"test_int: {test_int}")
    print(f"test_bool: {test_bool}\n")

    print(f"1.  test_string == 'mopsy' should be False.\n"
        f"{test_string == 'mopsy'}")
    
    print(f"2.  test_string.lower() == 'mopsy' should be True.\n"
        f"{test_string.lower() == 'mopsy'}")

    print(f"3.  test_string in test_list should be False.\n"
        f"{test_string in test_list}")

    print(f"4.  test_string not in test_list should be True.\n"
        f"{test_string not in test_list}")

    print(f"5.  test_int > 50 should be False.\n"
        f"{test_int > 50}")
    
    print(f"6.  test_int <= 45 should be True.\n"
        f"{test_int <= 45}")

    print(f"7.  test_int == 45 and test_string == 'mopsy' should be False.\n"
        f"{test_int == 45 and test_string == 'mopsy'}")

    print(f"8.  test_int != 45 or test_bool == True should be True.\n"
        f"{test_int == 45 or test_bool == True}")

    print(f"9.  test_bool != True should be False.\n"
        f"{test_bool != True}")

    print(f"10. test_bool == True should be True.\n"
        f"{test_bool == True}")

# 5-2. More Conditional Tests: You don’t have to limit the number of 
# tests you create to 10. If you want to try more comparisons, write 
# more tests and add them to conditional_tests.py. Have at least one 
# True and one False result for each of the following: 
# Tests for equality and inequality with strings 
# Tests using the lower() method Numerical tests involving equality and 
# inequality, greater than and less than, greater than or equal to, and 
# less than or equal to 
# Tests using the and keyword and the or keyword 
# Test whether an item is in a list 
# Test whether an item is not in a list 
def ex5_2():
    print("Skipped. Done for exercise 5-1.")

# 5-3. Alien Colors #1: Imagine an alien was just shot down in a game. 
# Create a variable called alien_color and assign it a value of 'green', 
# 'yellow', or 'red'. Write an if statement to test whether the alien’s 
# color is green. If it is, print a message that the player just earned 
# 5 points. Write one version of this program that passes the if test 
# and another that fails. (The version that fails will have no output.)
def ex5_3():
    alien_color = 'red'

    # Will have no output.
    if alien_color == 'green':
        print(f"The alien was green. You have earned 5 points.")

    if alien_color != 'green':
        print(f"The alien was not green. You have earned 5 points.") 

# 5-4. Alien Colors #2: Choose a color for an alien as you did in 
# Exercise 5-3, and write an if-else chain. If the alien’s color is 
# green, print a statement that the player just earned 5 points for 
# shooting the alien. If the alien’s color isn’t green, print a 
# statement that the player just earned 10 points. Write one version of 
# this program that runs the if block and another that runs the else 
# block. 
def ex5_4():
    alien_color = 'red'

    # Runs the if block.
    if alien_color == 'green':
        print("(if block) You have earned 5 points for shooting the alien.")
    
    else:
        print("(else block) You have earned 10 points for shooting the "
        "alien.")         

    # Runs the else block.
    if alien_color != 'green':
        print("(if block) You have earned 10 points for shooting the alien.")
    
    else:
        print("(else block) You have earned 5 points for shooting the "
        "alien.")

# 5-5. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into 
# an if-elif-else chain. 
# If the alien is green, print a message that the player earned 5 
# points. 
# If the alien is yellow, print a message that the player earned 10 
# points. 
# If the alien is red, print a message that the player earned 15 points. 
# Write three versions of this program, making sure each message is 
# printed for the appropriate color alien. 
def ex5_5():
    alien_color = ['green', 'yellow', 'red'] 
    points = 0
    
    def point_announcer(color):
        if alien_color == 'green':
            points = 5

        elif alien_color == 'yellow':
            points = 10

        else:
            points = 15

        print(f"You earned {str(points)} points.")

    for color in alien_color:
        point_announcer(color)

# 5-6. Stages of Life: Write an if-elif-else chain that determines a 
# person’s stage of life. Set a value for the variable age, and then:
# If the person is less than 2 years old, print a message that the 
# person is a baby.
# If the person is at least 2 years old but less than 4, print a message 
# that the person is a toddler. 
# If the person is at least 4 years old but less than 13, print a 
# message that the person is a kid.
# If the person is at least 13 years old but less than 20, print a 
# message that the person is a teenager.
# If the person is at least 20 years old but less than 65, print a 
# message that the person is an adult. 
# If the person is age 65 or older, print a message that the person is 
# an elder. 
def ex5_6():
    age = random.randint(0, 120)
    CONSONANTS = 'aeiou'
    stage = '' 
    article = ''

    print(f"Age was randomly set to {age}.")

    if age < 2:
        stage = 'baby'
    
    elif age < 4:
        stage = 'toddler'
    
    elif age < 13:
        stage = 'kid'
    
    elif age < 20:
        stage = 'teenager'
    
    elif age < 65:
        stage = 'adult'

    else:
        stage = 'elder'

    article = 'an' if stage[0] in CONSONANTS else 'a'

    print(f"You are {article} {stage}.")
    
# 5-7. Favorite Fruit: Make a list of your favorite fruits, and then 
# write a series of independent if statements that check for certain 
# fruits in your list. Make a list of your three favorite fruits and 
# call it favorite_fruits. Write five if statements. Each should check 
# whether a certain kind of fruit is in your list. If the fruit is in 
# your list, the if block should print a statement, such as You really 
# like bananas! 
def ex5_7():
    favorite_fruits = ['apples', 'oranges', 'grapes']
    check_list = ['pineapples', 'apples', 'kiwis', 'pears', 'bananas']

    for fruit in check_list:
        if fruit in favorite_fruits:
            print(f"You really like {fruit}!")

# 5-8. Hello Admin: Make a list of five or more usernames, including the 
# name 'admin'. Imagine you are writing code that will print a greeting 
# to each user after they log in to a website. Loop through the list, 
# and print a greeting to each user. If the username is 'admin', print a 
# special greeting, such as Hello admin, would you like to see a status 
# report? Otherwise, print a generic greeting, such as Hello Jaden, 
# thank you for logging in again. 
def ex5_8():
    usernames = ['admin', 'god', 'abaker', 'cdog', 'efox', 'ghow', 'ijig']

    for user in usernames:
        if user == 'admin':
            print(f"Hello {user.title()}, would you like to see a status"
                " report?")

        else:
            print(f"Hello {user.title()}, welcome back.")

# 5-9. No Users: Add an if test to hello_admin.py to make sure the list 
# of users is not empty. If the list is empty, print the message We need 
# to find some users! Remove all of the usernames from your list, and 
# make sure the correct message is printed. 
def ex5_9():
    usernames = []

    if usernames:
        for user in usernames:
            if user == 'admin':
                print(f"Hello {user.title()}, would you like to see a status"
                    " report?")

            else:
                print(f"Hello {user.title()}, welcome back.")
    
    else:
        print("We need to find some users!")

# 5-10. Checking Usernames: Do the following to create a program that 
# simulates how websites ensure that everyone has a unique username. 
# Make a list of five or more usernames called current_users. Make 
# another list of five usernames called new_users. Make sure one or two 
# of the new usernames are also in the current_users list.Loop through 
# the new_users list to see if each new username has already been used. 
# If it has, print a message that the person will need to enter a new 
# username. If a username has not been used, print a message saying that 
# the username is available. Make sure your comparison is case 
# insensitive. If 'John' has been used, 'JOHN' should not be accepted. 
# (To do this, you’ll need to make a copy of current_users containing 
# the lowercase versions of all existing users.) 
def ex5_10():
    current_users = ['ABAKER', 'CDog', 'Efox', 'GHow', 'ijig']
    current_users_lower = [x.lower() for x in current_users]
    new_users = ['abaker', 'Efox', 'klove', 'MNAN']

    print(f"current_users:\n{current_users}\n")
    print(f"new_users:\n{new_users}\n")

    for new_user in new_users:
        try:
            new_user_formatted = new_user[0].upper() + new_user[1:].title()
        
        except IndexError:
            new_user_formatted = new_user.upper()
        
        if new_user.lower() in current_users_lower:
            print(f"{new_user_formatted} is unavailable.")

        else:
            print(f"{new_user_formatted} is available.")

# 5-11. Ordinal Numbers: Ordinal numbers indicate their position in a 
# list, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, 
# and 3. Store the numbers 1 through 9 in a list. Loop through the list. 
# Use an if-elif-else chain inside the loop to print the proper ordinal 
# ending for each number. Your output should read "1st 2nd 3rd 4th 5th 
# 6th 7th 8th 9th", and each result should be on a separate line. 
def ex5_11():
    numbers = list(range(1, 10))

    def suffix_gen(number):
        if number == 1:
            return 'st'
        
        elif number == 2:
            return 'nd'
        
        elif number == 3:
            return 'rd'
        
        else:
            return 'th'

    for number in numbers:
        suffix = suffix_gen(number)
        print(f"{number}{suffix}")

# 5-12. Styling if Statements: Review the programs you wrote in this 
# chapter, and make sure you styled your conditional tests appropriately. 
def ex5_12():
    print("The only recommendation PEP 8 provides for styling\n"
        "conditional tests is to use a single space around\n"
        "comparison operators, such as ==, >=, and <=.\n\n"
        "For example: if age < 4:\n"
        "is better than: if age<4:")

# 5-13. Your Ideas: At this point, you’re a more capable programmer than 
# you were when you started this book. Now that you have a better sense 
# of how real-world situations are modeled in programs, you might be 
# thinking of some problems you could solve with your own programs. 
# Record any new ideas you have about problems you might want to solve 
# as your programming skills continue to improve. Consider games you 
# might want to write, datasets you might want to explore, and web 
# applications you’d like to create. 
def ex5_13():
    pass

while True:
    try:
        chapter = 5
        exercises = '1-13'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")