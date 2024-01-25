#! python3

# 4-1. Pizzas: Think of at least three kinds of your favorite pizza. 
# Store these pizza names in a list, and then use a for loop to print 
# the name of each pizza. Modify your for loop to print a sentence 
# using the name of the pizza, instead of printing just the name of the 
# pizza. For each pizza, you should have one line of output containing 
# a simple statement like I like pepperoni pizza. Add a line at the end 
# of your program, outside the for loop, that states how much you like 
# pizza. The output should consist of three or more lines about the 
# kinds of pizza you like and then an additional sentence, such as I 
# really love pizza!
def ex4_1():
    pizzas = ['cheese', 'hawaiian', 'pepperoni']

    for pizza in pizzas:
        print(f"I like {pizza} pizza.")
    
    print("\nI really love pizza!")

# 4-2. Animals: Think of at least three different animals that have a 
# common characteristic. Store the names of these animals in a list, 
# and then use a for loop to print out the name of each animal. Modify 
# your program to print a statement about each animal, such as A dog 
# would make a great pet. Add a line at the end of your program, 
# stating what these animals have in common. You could print a 
# sentence, such as Any of these animals would make a great pet! 
def ex4_2():
    pets = ['hedgehog', 'pomeranian', 'budgie']

    for pet in pets:
        print(f"A {pet} would make a great pet.")

    print(f"\nAny of these would make a great pet!")

# 4-3. Counting to Twenty: Use a for loop to print the numbers from 1 
# to 20, inclusive.
def ex4_3():
    start_num = 1
    end_num = 20        # Inclusive.

    print(f"Counting from {start_num} to {end_num}")
    for x in range(start_num, end_num + 1):
        print(x)

# 4-4. One Million: Make a list of the numbers from one to one million, 
# and then use a for loop to print the numbers. (If the output is 
# taking too long, stop it by pressing CTRL-C or by closing the output 
# window.)
def ex4_4():
    start_num = 1
    end_num = 1_000_000        # Inclusive.

    print(f"Counting from {start_num} to {end_num}")
    for x in range(start_num, end_num + 1):
        print(x)

# 4-5. Summing a Million: Make a list of the numbers from one to one 
# million, and then use min() and max() to make sure your list actually 
# starts at one and ends at one million. Also, use the sum() function 
# to see how quickly Python can add a million numbers. 
def ex4_5():
    million = range(1, 1_000_001)
    print(f"Creating list 'million' with 'range(1, 1_000_001).\n"
        "Confirming extents:\n")

    print(f"min(million): {min(million)}\n"
        f"max(million): {max(million)}")

# 4-6. Odd Numbers: Use the third argument of the range() function to 
# make a list of the odd numbers from 1 to 20. Use a for loop to print 
# each number.
def ex4_6():
    odd_numbers = list(range(1, 20, 2))
    print(odd_numbers)

# 4-7. Threes: Make a list of the multiples of 3, from 3 to 30. Use a 
# for loop to print the numbers in your list.
def ex4_7():
    multiples_three = list(range(3, 31, 3))
    for multiple in multiples_three:
        print(multiple)

# 4-8. Cubes: A number raised to the third power is called a cube. For 
# example, the cube of 2 is written as 2**3 in Python. Make a list of 
# the first 10 cubes (that is, the cube of each integer from 1 through 
# 10), and use a for loop to print out the value of each cube. 
def ex4_8():
    for i in range(1, 11):
        print(f"{i} ** 3 = {i ** 3}")

# 4-9. Cube Comprehension: Use a list comprehension to generate a list 
# of the first 10 cubes. 
def ex4_9():
    cubes = [i ** 3 for i in range(1, 11)]
    print(f"First ten cubes: {cubes}")

# 4-10. Slices: Using one of the programs you wrote in this chapter, 
# add several lines to the end of the program that do the following: 
# Print the message The first three items in the list are:. Then use a 
# slice to print the first three items from that program’s list. Print 
# the message Three items from the middle of the list are:. Then use a 
# slice to print three items from the middle of the list. Print the 
# message The last three items in the list are:. Then use a slice to 
# print the last three items in the list.
def ex4_10():
    cubes = [i ** 3 for i in range(1, 11)]
    print(f"First ten cubes: {cubes}\n")
    print(f"The first three items are: {cubes[:3]}")
    print(f"Three items from the middle of the list are: {cubes[3:6]}")
    print(f"The last three items in the list are: {cubes[7:]}")    

# 4-11. My Pizzas, Your Pizzas: Start with your program from Exercise 
# 4-1 (page 56). Make a copy of the list of pizzas, and call it 
# friend_pizzas. Then, do the following: Add a new pizza to the 
# original list. Add a different pizza to the list friend_pizzas. Prove 
# that you have two separate lists. Print the message My favorite 
# pizzas are:, and then use a for loop to print the first list. Print 
# the message My friend’s favorite pizzas are:, and then use a for loop 
# to print the second list. Make sure each new pizza is stored in the 
# appropriate list. 
def ex4_11():
    pizzas = ['cheese', 'hawaiian', 'pepperoni']
    friend_pizzas = pizzas[:]
    
    print(f"pizzas:\n{pizzas}\n")
    print(f"friend_pizzas:\n{friend_pizzas}\n")

    print(f"Adding meat lovers' to pizzas."
        " Adding vegetarian to friend_pizzas.")
    
    pizzas.append('meat lovers\'')
    friend_pizzas.append('vegetarian')

    print("\nMy favorite pizzas are:")
    for pizza in pizzas:
        print(pizza)

    print("\nMy friend's favorite pizzas are:")
    for pizza in friend_pizzas:
        print(pizza)

# 4-12. More Loops: All versions of foods.py in this section have 
# avoided using for loops when printing, to save space. Choose a 
# version of foods.py, and write two for loops to print each list of 
# foods.
def ex4_12():
    my_foods = ['pizza', 'falafel', 'carrot cake']
    friend_foods = my_foods[:]

    print("My favorite foods are:")
    for food in my_foods:
        print(food)

    print("\nMy friend's favorite foods are:")
    for food in friend_foods:
        print(food)

# 4-13. Buffet: A buffet-style restaurant offers only five basic foods. 
# Think of five simple foods, and store them in a tuple. Use a for loop 
# to print each food the restaurant offers. Try to modify one of the 
# items, and make sure that Python rejects the change. The restaurant 
# changes its menu, replacing two of the items with different foods. 
# Add a line that rewrites the tuple, and then use a for loop to print 
# each of the items on the revised menu. 
def ex4_13():
    foods = ('fruits', 'salad', 'pizza', 'burgers', 'noodles')

    for food in foods:
        print(food)
    
    #foods[1] = 'bread'     # Returns TypeError. Can't modify tuples.

    foods = ('sandwiches', 'pasta', 'chicken', 'steak', 'cake')
    
    for food in foods:
        print(food)

# 4-14. PEP 8: Look through the original PEP 8 style guide at 
# https://python.org/dev/pepspep-0008. You won’t use much of it now, 
# but it might be interesting to skim through it. 
def ex4_14():
    pass

# 4-15. Code Review: Choose three of the programs you’ve written in 
# this chapter and modify eachone to comply with PEP 8. Use four spaces 
# for each indentation level. Set your text editor to insert four 
# spaces every time you press the TAB key, if you haven’t already done 
# so (see Appendix B for instructions on how to do this). Use less than 
# 80 characters on each line, and set your editor to show a vertical 
# guideline at the 80th character position. Don’t use blank lines 
# excessively in your program files. 
def ex4_15():
    # Done.
    pass

while True:
    try:
        chapter = 4
        exercises = '1-15'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")