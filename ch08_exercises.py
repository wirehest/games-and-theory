#! python3

import printing_functions   # For ex8_15.
import display_message      # For ex8_16.

# 8-1. Message: Write a function called display_message() that prints 
# one sentence telling everyone what you are learning about in this 
# chapter. Call the function, and make sure the message displays 
# correctly. 
def ex8_1():
    def display_message():
        """Displays a message about what I'm learning."""
        print("We are learning about functions in Chapter 8.")

    display_message()

# 8-2. Favorite Book: Write a function called favorite_book() that 
# accepts one parameter, title. The function should print a message, 
# such as One of my favorite books is Alice in Wonderland. Call the 
# function, making sure to include a book title as an argument in the
# function call. 
def ex8_2():
    def favorite_book(title):
        """Prints a book title."""
        print(f"One of my favorite books is {title}.")

    favorite_book('Alice in Wonderland')

# 8-3. T-Shirt: Write a function called make_shirt() that accepts a size 
# and the text of a message that should be printed on the shirt. The 
# function should print a sentence summarizing the size of the shirt and 
# the message printed on it. Call the function once using positional 
# arguments to make a shirt. Call the function a second time using 
# keyword arguments. 
def ex8_3():
    def make_shirt(size, message):
        """Prints a size and message for a customized shirt."""
        print(f"Making custom shirt size {size},"
            f" with message: '{message}.'")

    make_shirt('M', 'Pythonista')   # Positional args.
    make_shirt(message='Keyword Arguments', size='L')    # Keyword args.

# 8-4. Large Shirts: Modify the make_shirt() function so that shirts are 
# large by default with a message that reads I love Python. Make a large 
# shirt and a medium shirt with the default message, and a shirt of any 
# size with a different message. 
def ex8_4():
    def make_shirt(size='L', message='I love Python'):
        """Prints size and message for a customized shirt. Has default vals."""
        print(f"Making custom shirt size {size},"
            f" with message: '{message}.'")

    make_shirt()     # Large shirt with default message.
    make_shirt('M')        # Medium shirt with default message.
    make_shirt('S', 'Aladeen')      # Override both defaults. 

# 8-5. Cities: Write a function called describe_city() that accepts the 
# name of a city and its country. The function should print a simple 
# sentence, such as Reykjavik is in Iceland. Give the parameter for the 
# country a default value. Call your function for three different 
# cities, at least one of which is not in the default country. 
def ex8_5():
    def describe_city(city, country='Japan'):
        """Prints a statement about a city and country."""
        print(f"{city.title()} is in {country.title()}.")

    describe_city('osaka')
    describe_city('sapporo')
    describe_city('Paris', 'France')    # Overrides default country.

# 8-6. City Names: Write a function called city_country() that takes in 
# the name of a city and its country. The function should return a 
# string formatted like this: "Santiago, Chile"
# Call your function with at least three city-country pairs, and print 
# the values that are returned. 
def ex8_6():
    def city_country(city, country):
        """Takes acity and country and return a string formatted 
        like: 'City, Country.'
        """
        return f"{city.title()}, {country.title()}."

    city = city_country('Singapore', 'Singapore')
    print(city)

    city = city_country('Sydney', 'Australia')
    print(city)

    city = city_country('Reykjavik', 'Iceland')
    print(city)

# 8-7. Album: Write a function called make_album() that builds a 
# dictionary describing a music album. The function should take in an 
# artist name and an album title, and it should return a dictionary 
# containing these two pieces of information. Use the function to make 
# three dictionaries representing different albums. Print each return 
# value to show that the dictionaries are storing the album information 
# correctly. Use None to add an optional parameter to make_album() that 
# allows you to store the number of songs on an album. If the calling 
# line includes a value for the number of songs, add that value to the 
# album’s dictionary. Make at least one new function call that includes 
# the number of songs on an album. 
def ex8_7():
    def make_album(artist, album, song_count=None):
        """Creates a dictionary with album information."""
        if song_count == None:
            return {album: [artist.title()]}
        else:
            return {album: [artist.title(), song_count]}

    album_dicts = make_album('able', "Able's Album")
    print(album_dict)

    album_dict = make_album('baker', "Baker's Beats", 9)
    print(album_dict)

# 8-8. User Albums: Start with your program from Exercise 8-7. Write a 
# while loop that allows users to enter an album’s artist and title. 
# Once you have that information, call make_album() with the user’s 
# input and print the dictionary that’s created. Be sure to include a 
# quit value in the while loop. 
def ex8_8():
    def make_album(artist, album, song_count=None):
        """Creates a dictionary with album information."""
        if song_count:
            return {album: [artist.title(), song_count]}
        else:
            return {album: [artist.title()]}

    print("Provide album details. Enter 'quit' at any time to quit.")
    while True:
        artist = input("Artist: ")
        if artist.lower() == 'quit':
            break

        album = input("Album: ")
        if album.lower() == 'quit':
            break

        song_count = input("Song Count (optional): ")
        if song_count.lower() == 'quit':
            break
        song_count = None if song_count == '' else song_count

        album_dict = make_album(artist, album, song_count)
        print(f"{album_dict}\n")

# 8-9. Messages: Make a list containing a series of short text messages. 
# Pass the list to a function called show_messages(), which prints each 
# text message. 
def ex8_9():
    message_list = [
        "Hello!",
        "How is your day?",
        "Here is another message.",
        ]

    def show_messages(message_list):
        """Prints all messages in a list."""
        for message in message_list:
            print(message)

    show_messages(message_list)

# 8-10. Sending Messages: Start with a copy of your program from 
# Exercise 8-9. Write a function called send_messages() that prints each 
# text message and moves each message to a new list called sent_messages 
# as it’s printed. After calling the function, print both of your lists 
# to make sure the messages were moved correctly. 
def ex8_10():
    message_list = [
        "Hello!",
        "How is your day?",
        "Here is another message.",
        ]
    sent_messages = []

    def send_messages(message_list):
        """Prints all messages in a list while moving the messages to 
        another list.
        """
        for i in range(len(message_list)):
            current_message = message_list.pop()
            print(current_message)
            sent_messages.append(current_message)

    show_messages(message_list)
    print(f"message_list: {message_list}")
    print(f"sent_messages: {sent_messages}")    

# 8-11. Archived Messages: Start with your work from Exercise 8-10. Call 
# the function send_messages() with a copy of the list of messages. 
# After calling the function, print both of your lists to show that the 
# original list has retained its messages. 
def ex8_11():
    message_list = [
        "Hello!",
        "How is your day?",
        "Here is another message.",
        ]
    message_list_copy = message_list[:]
    sent_messages = []

    def send_messages(message_list_copy):
        """Prints all messages in a list while moving the messages to 
        another list.
        """
        for i in range(len(message_list_copy)):
            current_message = message_list_copy.pop()
            print(current_message)
            sent_messages.append(current_message)

    show_messages(message_list)
    print(f"message_list: {message_list}")
    print(f"message_list_copy: {message_list_copy}")
    print(f"sent_messages: {sent_messages}")       

# 8-12. Sandwiches: Write a function that accepts a list of items a 
# person wants on a sandwich. The function should have one parameter 
# that collects as many items as the function call provides, and it 
# should print a summary of the sandwich that’s being ordered. Call the 
# function three times, using a different number of arguments each time. 
def ex8_12():
    def make_sandwich(*toppings):
        """Prints a list of sandwich toppings."""
        print("\nYour sandwich has: ")
        for topping in toppings:
            print(f"{topping}")
    
    make_sandwich('chicken')
    make_sandwich('tuna salad', 'lettuce', 'salt & pepper')
    make_sandwich('meatballs', 'swiss cheese')

# 8-13. User Profile: Start with a copy of user_profile.py from page 
# 148. Build a profile of yourself by calling build_profile(), using 
# your first and last names and three other key-value pairs that 
# describe you. 
def ex8_13():
    def build_profile(first, last, **user_info):
        """Build a dictionary containing everything we know about a user."""
        user_info['first_name'] = first
        user_info['last_name'] = last
        return user_info
        
    user_profile = build_profile(
            'able', 'baker',
            hair_color = 'black',
            eye_color = 'brown',
            height = '170cm',
        )

    print(user_profile)

# 8-14. Cars: Write a function that stores information about a car in a 
# dictionary. The function should always receive a manufacturer and a 
# model name. It should then accept an arbitrary number of keyword 
# arguments. Call the function with the required information and two 
# other name-value pairs, such as a color or an optional feature. Your 
# function should work for a call like this one: 
# car = make_car('subaru', 'outback', color='blue', tow_package=True)
# Print the dictionary that’s returned to make sure all the information 
# was stored correctly. 
def ex8_14():
    def car_info(make, model, **kwargs):
        """Accepts an arbitrary # of args about a car and returns it.""" 
        kwargs['make'] = make
        kwargs['model'] = model
        return kwargs

    car = car_info('subaru', 'outback', color='blue', tow_package=True)

    print(car)    

# 8-15. Printing Models: Put the functions for the example 
# printing_models.py in a separate file called printing_functions.py. 
# Write an import statement at the top of printing_models.py, and modify 
# the file to use the imported functions. 
def ex8_15():
    unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
    completed_models = []

    printing_functions.print_models(unprinted_designs, completed_models)
    printing_functions.show_completed_models(completed_models)

# 8-16. Imports: Using a program you wrote that has one function in it, 
# store that function in a separate file. Import the function into your 
# main program file, and call the function using each of these 
# approaches: 
# import module_name
# from module_name import function_name
# from module_name import function_name as fn
# import module_name as mn 
# from module_name import *
def ex8_16():
    print("Nothing to show.")   # Function calls tested via interpreter.
    pass

# 8-17. Styling Functions: Choose any three programs you wrote for this
# chapter, and make sure they follow the styling guidelines described in 
# this section. 
def ex8_17():
    print("Nothing to show.")   # Styling guidelines followed.
    pass


while True:
    try:
        chapter = 8
        exercises = '1-17'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")