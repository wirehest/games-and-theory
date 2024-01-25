#! python3

# 7-1. Rental Car: Write a program that asks the user what kind of 
# rental car they would like. Print a message about that car, such as 
# “Let me see if I can find you a Subaru.” 
def ex7_1():
    requested_car = input("What kind of rental car would you like?\n")
    print(f"\nLet me see if I can find you a {requested_car}.")

# 7-2. Restaurant Seating: Write a program that asks the user how many 
# people are in their dinner group. If the answer is more than eight, 
# print a message saying they’ll have to wait for a table. Otherwise, 
# report that their table is ready. 
def ex7_2():
    party_size = int(input("How many people in your dinner group?\n"))
    response = ''

    if party_size > 8:
        response = "I'm sorry. You will have to wait for a table."
    
    else:
        response = "Your table is ready!"
    
    print(response)

# 7-3. Multiples of Ten: Ask the user for a number, and then report 
# whether the number is a multiple of 10 or not. 
def ex7_3():
    user_number = int(input("Give me a number: "))
    multiple_outcome = ''

    if user_number % 10 == 0:
        pass
    
    else:
        multiple_outcome = 'not '

    print(f"You entered: {user_number}."
        f" It is {multiple_outcome}a multiple of 10.")

# 7-4. Pizza Toppings: Write a loop that prompts the user to enter a 
# series of pizza toppings until they enter a 'quit' value. As they 
# enter each topping, print a message saying you’ll add that topping to 
# their pizza. 
def ex7_4():
    pizza_toppings = []
    topping = ''

    while topping.lower() != 'quit':
        topping = input("Enter toppings to add or 'quit' to quit: ")
        
        if topping.lower() != 'quit':
            print(f"Adding {topping} to your pizza.\n")
            pizza_toppings.append(topping)      

# 7-5. Movie Tickets: A movie theater charges different ticket prices 
# depending on a person’s age. If a person is under the age of 3, the 
# ticket is free; if they are between 3 and 12, the ticket is $10; and 
# if they are over age 12, the ticket is $15. Write a loop in which you 
# ask users their age, and then tell them the cost of their movie 
# ticket. 
def ex7_5():
    age = int(input("What is your age? "))
    ticket_price = 15

    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        pass

    formatted_price = 'free' if ticket_price == 0 else f'${ticket_price}'

    print(f"The ticket will be {formatted_price}.")

# 7-6. Three Exits: Write different versions of either Exercise 7-4 or 
# 7-5 that do each of the following at least once: 
# Use a conditional test in the while statement to stop the loop. 
# Use an active variable to control how long the loop runs. 
# Use a break statement to exit the loop when the user enters a 'quit' 
# value. 
def ex7_6():
    pizza_toppings = []
    topping = ''

    print("7-6: conditional test controls loop:")
    while topping.lower() != 'quit':
        topping = input("Enter toppings to add or 'quit' to quit: ")
        
        if topping.lower() != 'quit':
            print(f"Adding {topping} to your pizza.\n")
            pizza_toppings.append(topping)

    pizza_toppings = []
    topping = ''
    active = True

    print("7-6: active variable controls loop:")
    while active:
        topping = input("Enter toppings to add or 'quit' to quit: ")
        
        if topping.lower() == 'quit':
            active = False

        else:
            print(f"Adding {topping} to your pizza.\n")
            pizza_toppings.append(topping) 

    pizza_toppings = []
    topping = ''

    print("7-6: break statement to exit loop:")
    while topping.lower() != 'quit':
        topping = input("Enter toppings to add or 'quit' to quit: ")
        
        if topping.lower() == 'quit':
            break

        else:
            print(f"Adding {topping} to your pizza.\n")
            pizza_toppings.append(topping) 

# 7-7. Infinity: Write a loop that never ends, and run it. (To end the 
# loop, press CTRL-C or close the window displaying the output.)
def ex7_7():
    counter = 1
    
    print("An infinite loop will run."
        "\nPress CTRL-C or close the window to quit.")
    input("Ready? (Press any key to continue.)")
    
    while True:
        print(f"Loop counter: {counter}")
        counter += 1    

# 7-8. Deli: Make a list called sandwich_orders and fill it with the 
# names of various sandwiches. Then make an empty list called 
# finished_sandwiches. Loop through the list of sandwich orders and 
# print a message for each order, such as I made your tuna sandwich. As 
# each sandwich is made, move it to the list of finished sandwiches. 
# After all the sandwiches have been made, print a message listing each 
# sandwich that was made. 
def ex7_8():
    sandwich_orders = ['chicken', 'pastrami', 'meatball', 'ham and cheese']
    finished_sandwiches = []

    while sandwich_orders:
        current_sandwich = sandwich_orders.pop()
        print(f"Making your {current_sandwich} sandwich.")
        finished_sandwiches.append(current_sandwich)

    print(f"\nThe following sandwiches were made:")
    for num, sandwich in enumerate(finished_sandwiches):
        print(f"{num + 1}. A {sandwich} sandwich.")

# 7-9. No Pastrami: Using the list sandwich_orders from Exercise 7-8, 
# make sure the sandwich 'pastrami' appears in the list at least three 
# times. Add code near the beginning of your program to print a message 
# saying the deli has run out of pastrami, and then use a while loop to 
# remove all occurrences of 'pastrami' from sandwich_orders. Make sure 
# no pastrami sandwiches end up in finished_sandwiches. 
def ex7_9():
    sandwich_orders = [
        'chicken', 
        'pastrami', 
        'meatball', 
        'pastrami',
        'ham and cheese',
        'pastrami',
        ]
    finished_sandwiches = []

    print("The deli has run out of pastrami.")

    while 'pastrami' in sandwich_orders:
        sandwich_orders.remove('pastrami')

    while sandwich_orders:
        current_sandwich = sandwich_orders.pop()
        print(f"Making your {current_sandwich} sandwich.")
        finished_sandwiches.append(current_sandwich)

    print(f"\nThe following sandwiches were made:")
    for num, sandwich in enumerate(finished_sandwiches):
        print(f"{num + 1}. A {sandwich} sandwich.")

# 7-10. Dream Vacation: Write a program that polls users about their 
# dream vacation. Write a prompt similar to If you could visit one place 
# in the world, where would you go? Include a block of code that prints 
# the results of the poll. 
def ex7_10():
    destinations = {}
    summed = {}
    username = ''
    destination = ''

    print(f"Enter 'quit' at any time to quit.")
    
    while True:
        add_new = input("Take the poll? Y/N. ")

        if add_new.lower() == 'y':
            username = input("What is your name?\n")
            if username.lower() == 'quit':
                break
            
            destination = input("What is your dream destination?\n")
            if destination.lower() == 'quit':
                break

            destinations[username] = destination

        else:
            break
    
    print("Per user results:")
    for name, destination in destinations.items():
        print(f"{name.title()} wants to go to {destination.title()}.")

    unique_destinations = set(destinations.values())
    for destination in unique_destinations:
        summed[destination] = 0

    for destination in destinations.values():
        summed[destination] += 1

    print("\nTotals by destination:")
    for destination in summed:
        print(f"{destination.title()}: {summed[destination]} votes.")


while True:
    try:
        chapter = 7
        exercises = '1-10'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")