#! python3

# 3-1. Names: Store the names of a few of your friends in a list called
# names. Print each person’s name by accessing each element in the list,
# one at a time. 
def ex3_1():
    friends = ['Able', 'Baker', 'Charlie']
    
    for friend in friends:
        print(f"{friend.title()} is my friend.") 

# 3-2. Greetings: Start with the list you used in Exercise 3-1, but 
# instead of just printing each person’s name, print a message to them. 
# The text of each message should be the same, but each message should 
# be personalized with the person’s name. 
def ex3_2():
    friends = ['Able', 'Baker', 'Charlie']

    for friend in friends:
        print(f"Hello {friend}! How are you today?")

# 3-3. Your Own List: Think of your favorite mode of transportation, 
# such as a motorcycle or a car, and make a list that stores several 
# examples. Use your list to print a series of statements about these 
# items, such as “I would like to own a Honda motorcycle.” 
def ex3_3():
    rail_transport = ['streetcars', 'subways', 'bullet trains']
    print(f"rail_transport[0]: I like riding {rail_trainsport[0]}.")
    print(f"rail_transport[1]: {rail_transport[1].title()} suck when" 
        "they're delayed")
    print(f"rail_transport[2]: {rail_transport[2]} are so fast!") 

# 3-4. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
def ex3_4():
    invitees = ['raymond chandler', 'maria nikolaevna', 'nancy reagan']
    for invitee in invitees:
        print(f"I would love for you to join me for dinner "
            f"{invitee.title()}")

# 3-5. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. Start with your program from Exercise 3-4. Add a print() call at the end of your program, stating the name of the guest who can’t make it. Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. Print a second set of invitation messages, one for each person who is still in your list. 
def ex3_5():
    invitees = ['raymond chandler', 'maria nikolaevna', 'nancy reagan']
    
    def print_invitations(names):
        """Prints invitees."""
        for name in names:
            print(f"I would love for you to join me for dinner, "
                f"{name.title()}")
    
    print_invitations(invitees)

    print(f"\nLooks like {invitees[1].title()} can't make it.")
    invitees[1] = 'paul walker'
    print(f"Adding {invitees[1].title()} to the list. Printing new invites:\n")

    print_invitations(invitees)

# 3-6. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. Start with your program from Exercise 3-4 or 3-5. Add a print() call to the end of your program, informing people that you found a bigger table. Use insert() to add one new guest to the beginning of your list. Use insert() to add one new guest to the middle of your list. Use append() to add one new guest to the end of your list. Print a new set of invitation messages, one for each person in your list.
def ex3_6():
    invitees = ['raymond chandler', 'maria nikolaevna', 'nancy reagan']
    
    def print_invitations(names):
        """Prints invitees."""
        for name in names:
            print(f"I would love for you to join me for dinner, "
                f"{name.title()}")
    
    print_invitations(invitees)

    print(f"\nLooks like {invitees[1].title()} can't make it.")
    invitees[1] = 'paul walker'
    print(f"Adding {invitees[1].title()} to the list. Printing new invites:\n")

    print_invitations(invitees)

    print(f"\nI found a bigger table. Adding more guests.\n")
    
    invitees.insert(0, 'george washington')
    invitees.insert(2, 'isaac asimov')
    invitees.append('rick james')

    print_invitations(invitees)

# 3-7. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and now you have space for only two guests. Start with your program from Exercise 3-6. Add a new line that prints a message saying that you can invite only two people for dinner. Use pop() to remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. Print a message to each of the two people still on your list, letting them know they’re still invited. Use del to remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
def ex3_7():
    invitees = ['raymond chandler', 'maria nikolaevna', 'nancy reagan']
    
    def print_invitations(names):
        """Prints invitees."""
        for name in names:
            print(f"I would love for you to join me for dinner, "
                f"{name.title()}")
    
    print_invitations(invitees)

    print(f"\nLooks like {invitees[1].title()} can't make it.")
    invitees[1] = 'paul walker'
    print(f"Adding {invitees[1].title()} to the list. Printing new invites:\n")

    print_invitations(invitees)

    print(f"\nI found a bigger table. Adding more guests.\n")
    
    invitees.insert(0, 'george washington')
    invitees.insert(2, 'isaac asimov')
    invitees.append('rick james')

    print_invitations(invitees)

    print(f"\nThe new table won't arrive in time.\n"
        "Now I can only have two people over for dinner.\n")

    while len(invitees) > 2:
        print(f"{invitees.pop().title()}, I'm sorry I can't have you over for dinner."
            " Maybe next time?")

    print()
    print_invitations(invitees)

# 3-8. Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a list. Make sure the list is not in alphabetical order. Print your list in its original order. Don’t worry about printing the list neatly; just print it as a raw Python list. Use sorted() to print your list in alphabetical order without modifying the actual list. Show that your list is still in its original order by printing it. Use sorted() to print your list in reverse-alphabetical order without changing the order of the original list. Show that your list is still in its original order by printing it again. Use reverse() to change the order of your list. Print the list to show that its order has changed. Use reverse() to change the order of your list again. Print the list to show it’s back to its original order. Use sort() to change your list so it’s stored in alphabetical order. Print the list to show that its order has been changed. Use sort() to change your list so it’s stored in reverse-alphabetical order. Print the list to show that its order has changed. 
def ex3_8():
    destinations = ['mykonos', 'reykjavik', 'amalfi', 'vancouver', 'berne']

    print(f"destinations:\n{destinations}\n")
    
    print(f"sorted(destinations):\n{sorted(destinations)}\n")
    print(f"destinations remains umodified:\n{destinations}\n")
    
    print(f"sorted(destinations, reverse=True):\n"
        f"{sorted(destinations, reverse=True)}\n")
    print(f"destinations remains unmodified:\n{destinations}\n")
    
    print("Using destinations.reverse().")
    destinations.reverse()
    print(f"destinations order has changed:\n{destinations}\n")
    
    print(f"Using destinations.reverse() again.")
    destinations.reverse()
    print(f"destinations order restored:\n{destinations}\n")
    
    print(f"Using destinations.sort().")
    destinations.sort()
    print(f"destinations order has changed:\n{destinations}\n")
    
    print(f"destinations.sort(reverse=True).")
    destinations.sort(reverse=True)
    print(f"destinations order has changed:\n{destinations}")

# 3-9. Dinner Guests: Working with one of the programs from Exercises 3-4 through 3-7 (pages 41 42), use len() to print a message indicating the number of people you’re inviting to dinner. 
def ex3_9():
    invitees = ['raymond chandler', 'maria nikolaevna', 'nancy reagan']
    
    print(f"The invitee list has {len(invitees)} people.\n")

    for invitee in invitees:
        print(f"I would love for you to join me for dinner "
            f"{invitee.title()}")

# 3-10. Every Function: Think of things you could store in a list. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items and then uses each function introduced in this chapter at least once. 
def ex3_10():
    sample_list = ['cats', 'dogs', 'pens', 'cars', 'puzzles', 'coffee']
    
    print(f"sample_list:\n{sample_list}")
    
    print("\nDemonstration of chapter 3 functions and methods...\n")
    
    sample_list.append('tea')
    print(f"method: sample_list.append('tea')\n{sample_list}\n")

    sample_list.insert(3, 'birds')
    print(f"method: sample_list.insert(3, 'birds')\n{sample_list}\n")

    print(f"method: sample_list.pop(4)\n{sample_list.pop(4)}\n")

    sample_list.remove('puzzles')
    print(f"method: sample_list.remove('puzzles')\n{sample_list}\n")
    
    sample_list.sort()
    print(f"method: sample_list.sort()\n"
        "Note: optional reverse=True available.\n"
         f"{sample_list}\n")
    
    sample_list.reverse()
    print(f"method: sample_list.reverse()\n{sample_list}\n")

    print(f"function: sorted(sample_list)\n"
        "Note: optional reverse=True available.\n"
        f"{sorted(sample_list)}\n")

    print(f"function: len(sample_list)\n{len(sample_list)}")

# 3-11. Intentional Error: If you haven’t received an index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. 
def ex3_11():
    sample_list = ['a', 'b', 'c']
    print(f"sample_list has {len(sample_list)} elements.")
    print(f"Calling index 3 will cause an error. (Script will terminate.)")
    input("Press any key when ready...")
    
    # Uncomment to trigger IndexError.
    print(sample_list[3])

while True:
    try:
        chapter = 3
        exercises = '1-11'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")