#! python3

import logging

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
logging.disable(logging.CRITICAL)

# 6-1. Person: Use a dictionary to store information about a person you 
# know. Store their first name, last name, age, and the city in which 
# they live. You should have keys such as first_name, last_name, age, 
# and city. Print each piece of information stored in your dictionary. 
def ex6_1():
    person = {
        'first_name': 'Able', 
        'last_name': 'Baker',
        'age': 35,
        'city': 'Samarkand',
        }

    for key, value in person.items():
        print(f"{key}: {str(value).title()}")

# 6-2. Favorite Numbers: Use a dictionary to store people’s favorite 
# numbers. Think of five names, and use them as keys in your dictionary. 
# Think of a favorite number for each person, and store each as a value 
# in your dictionary. Print each person’s name and their favorite 
# number. For even more fun, poll a few friends and get some actual data 
# for your program. 
def ex6_2():
    favorite_numbers = {
        'able': 1,
        'baker': 23,
        'charlie': 46,
        'dog': 100,
        'easy': 42,
        }

    for key, value in favorite_numbers.items():
        print(f"{key.title()}: {value}")

# 6-3. Glossary: A Python dictionary can be used to model an actual 
# dictionary. However, to avoid confusion, let’s call it a glossary. 
# Think of five programming words you’ve learned about in the previous 
# chapters. Use these words as the keys in your glossary, and store 
# their meanings as values. Print each word and its meaning as neatly
# formatted output. You might print the word followed by a colon and 
# then its meaning, or print the word on one line and then print its
# meaning indented on a second line. Use the newline character (\n) to 
# insert a blank line between each word-meaning pair in your output. 
def ex6_3():
    python_glossary = {
        'list': "A mutable (i.e., changeable) data structure whose" 
            " individual elements are accessed via index.",
        'function': "A discrete, reusable block of code that can take its" 
            " own parameters, and return values into variables.",
        'integer': "The set of whole numbers, positive or negative.",
        'boolean': "A data type with two possible values: True or False.",
        'variable': "A pointer to a specific area in the computer's memory"
            " storing data values.",
        }

    for i, (key, value) in enumerate(python_glossary.items()):
        print(f"{i + 1}. {key.title()}:\n\t{value}\n")

# 6-4. Glossary 2: Now that you know how to loop through a dictionary, 
# clean up the code from Exercise 6-3 (page 99) by replacing your series 
# of print() calls with a loop that runs through the dictionary’s keys 
# and values. When you’re sure that your loop works, add five more 
# Python terms to your glossary. When you run your program again, these 
# new words and meanings should automatically be included in the output. 
def ex6_4():
    python_glossary = {
        'list': "A mutable (i.e., changeable) data structure whose" 
            " individual elements are accessed via index.",
        'function': "A discrete, reusable block of code that can take its" 
            " own parameters, and return values into variables.",
        'integer': "The set of whole numbers, positive or negative.",
        'boolean': "A data type with two possible values: True or False.",
        'variable': "A pointer to a specific area in the computer's memory"
            " storing data values.",
        'method': "A function defined as part of a class that can only be"
            " called upon members of that class.",
        'tuple': "Similar to a list but immutable. Like list, tuple elements"
            " can be accessed via index.",
        'string': "A data type for sequences of text.",
        'for loop': "A looping technique that uses an iterable object, such as"
            " a list, and performs operations upon each element.",
        'while loop': "A looping technique that performs operations while a"
            " specified condition remains True.",
        }

    for i, (key, value) in enumerate(python_glossary.items()):
        print(f"{i + 1}. {key.title()}:\n\t{value}\n")

# 6-5. Rivers: Make a dictionary containing three major rivers and the 
# country each river runsthrough. One key-value pair might be 
# 'nile': 'egypt'. 
# Use a loop to print a sentence about each river, such as The Nile runs 
# through Egypt. 
# Use a loop to print the name of each river included in the dictionary. 
# Use a loop to print the name of each country included in the dictionary. 
def ex6_5():
    major_rivers = {
        'mississippi': 'united states',
        'amazon': 'brazil', 
        'nile': 'egypt',
        }

    print(f"\nUsing a loop to print a sentence about each river:")
    for key, value in major_rivers.items():
        article = 'the ' if value.lower() == 'united states' else ''
        print(f"The {key.title()} river is in {article}{value.title()}.")

    print(f"\nUsing a loop to print the name of each river:")
    for key in major_rivers:
        print(f"{key.title()} is a key in the dictionary.")

    print(f"\nUsing a loop to print the name of each country:")
    for value in major_rivers.values():
        print(f"{value.title()} is a value the dictionary.")

# 6-6. Polling: Use the code in favorite_languages.py (page 96). Make a 
# list of people who should take the favorite languages poll. Include 
# some names that are already in the dictionary and some that are not. 
# Loop through the list of people who should take the poll. If they have
# already taken the poll, print a message thanking them for responding. 
# If they have not yet taken the poll, print a message inviting them to 
# take the poll. 
def ex6_6():
    favorite_languages = {
        'jen': 'python',
        'sarah': 'c',
        'edward': 'rust',
        'phil': 'python',
        }
    fav_lang_keys = [x.lower() for x in favorite_languages.keys()]
    should_take_poll = ['jen', 'phil', 'able', 'baker', 'charlie', 'dog']

    for name in should_take_poll:
        if name.lower() in fav_lang_keys:
            print(f"Hey {name.title()}, thanks for taking the poll!")
        
        else:
            print(f"Hey {name.title()}, you should take our poll!")

# 6-7. People: Start with the program you wrote for Exercise 6-1 
# (page 98). Make two new dictionaries representing different people, 
# and store all three dictionaries in a list called people. Loop through 
# your list of people. As you loop through the list, print everything 
# you know about each person. 
def ex6_7():
    people = [{
        'first_name': 'able', 
        'last_name': 'baker',
        'age': 35,
        'city': 'Samarkand',
        },
        {
        'first_name': 'charlie', 
        'last_name': 'dog',
        'age': 21,
        'city': 'Baikonur',
        },  
        {
        'first_name': 'easy', 
        'last_name': 'fox',
        'age': 40,
        'city': 'Yakutsk',
        },]

    for person in people:
        for key, value in person.items():
            print(f"{key}: {str(value).title()}")
        print()
        
# 6-8. Pets: Make several dictionaries, where each dictionary represents 
# a different pet. In each dictionary, include the kind of animal and 
# the owner’s name. Store these dictionaries in a list called pets. 
# Next, loop through your list and as you do, print everything you know 
# about each pet. 
def ex6_8():
    pets = [{
        'name': 'pooch',
        'kind': 'dog',
        'owner': 'able',
        },
        {
        'name': 'tom',
        'kind': 'cat',
        'owner': 'baker',
        },
        {
        'name': 'boku',
        'kind': 'bird',
        'owner': 'charlie',
        },
        {
        'name': 'pokey',
        'kind': 'hedghog',
        'owner': 'george',
        },]

    for pet in pets:
        for key in pet:
            print(f"{key}: {pet[key].title()}")
        
        print()

# 6-9. Favorite Places: Make a dictionary called favorite_places. Think 
# of three names to use as keys in the dictionary, and store one to 
# three favorite places for each person. To make this exercise a bit 
# more interesting, ask some friends to name a few of their favorite 
# places. Loop through the dictionary, and print each person’s name and 
# their favorite places. 
def ex6_9():
    favorite_places = {
            'able': ['rome', 'mykonos', 'johannesburg'],
            'baker': ['singapore', 'christchurch'],
            'charlie': ['ho chi minh']
        }

    for name in favorite_places:
        places = favorite_places[name]
        plural = 's are' if len(places) > 1 else ' is'
        
        print(f"{name.title()}'s favorite place{plural}: ", end='')
        
        for place in places:
            is_last = (places.index(place) + 1) == len(places)
            pre = 'and ' if is_last and len(places) > 1 else ''
            punct = '.' if is_last else ', '
            
            print(f"{pre}{place.title()}{punct}", end='')
        
        print()

# 6-10. Favorite Numbers: Modify your program from Exercise 6-2 
# (page 98) so each person can have more than one favorite number. Then 
# print each person’s name along with their favorite numbers. 
def ex6_10():
    favorite_numbers = {
        'able': [1, 69, 33, 9,],
        'baker': [23, 86],
        'charlie': [46,],
        'dog': [100, 3.1415],
        'easy': [42,],
        }

    for name in favorite_numbers:
        numbers = favorite_numbers[name]
        is_are = ' is' if len(numbers) == 1 else 's are'
        
        print(f"{name.title()}'s favorite number{is_are}: ", end='')

        for number in numbers:
            is_last = numbers.index(number) + 1 == len(numbers)
            and1 = 'and ' if len(numbers) > 1 and is_last else ''
            period_comma = '.' if is_last else ', '
            
            print(f"{and1}{number}{period_comma}", end='')
        
        print()

# 6-11. Cities: Make a dictionary called cities. Use the names of three 
# cities as keys in your dictionary. Create a dictionary of information 
# about each city and include the country that the city is in, its 
# approximate population, and one fact about that city. The keys for 
# each city’s dictionary should be something like country, population, 
# and fact. Print the name of each city and all of the information you 
# have stored about it. 
def ex6_11():
    cities = {
        'tokyo': {'country': 'japan', 'pop': '+14M', 'fact': "Originally known as Edo before the Meiji Restoration, during which the city's name was changed to Tokyo.",},
        'sydney': {'country': 'australia', 'pop': '+5.2M', 'fact': "Sydney's original inhabitants were Aboriginal Australians who had migrated from southeast Asia.",},
        'lisbon': {'country': 'portugal', 'pop': '+540k' , 'fact': "Lisbon is one of the oldest cities in the world, and the second-oldest European capital city (after Athens).",},
        }

    for city in cities:
        print(f"\n{city.title()}:")
        print(f"* {city.title()} is located in {cities[city]['country'].title()}.")
        print(f"* {city.title()}'s approximate population is: "
            f"{cities[city]['pop']}.")
        print(f"* One fact about {city.title()}:\n{cities[city]['fact']}")

# 6-12. Extensions: We’re now working with examples that are complex 
# enough that they can be extended in any number of ways. Use one of the 
# example programs from this chapter, and extend it by adding new keys 
# and values, changing the context of the program, or improving the 
# formatting of the output.
def ex6_12(): 
    pass    # Skipped.

while True:
    try:
        chapter = 6
        exercises = '1-12'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        logging.info(f"running ex{chapter}_{execute_func}()")
        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")