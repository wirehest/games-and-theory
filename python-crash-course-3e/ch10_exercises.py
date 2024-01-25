#! python3

import json

from pathlib import Path

# 10-1. Learning Python: Open a blank file in your text editor and write 
# a few lines summarizing what you’ve learned about Python so far. Start 
# each line with the phrase In Python you can. . . . Save the file as 
# learning_python.txt in the same directory as your exercises from this 
# chapter. Write a program that reads the file and prints what you wrote 
# two times: print the contents once by reading in the entire file, and 
# once by storing the lines in a list and then looping over each line.
def ex10_1():
    """Reads learning_python.txt."""
    path = Path('learning_python.txt')
    text = path.read_text()

    print(f"\nReading entire file:\n{text}")

    print("\nPrinting via splitlines():")
    for line in text.splitlines():
        print(line)

# 10-2.	Learning C: You can use the replace() method to replace any word 
# in a string with a different word. Here’s a quick example showing how 
# to replace 'dog' with 'cat' in a sentence:
# >>> message = "I really like dogs."
# >>> message.replace('dog', 'cat')
# 'I really like cats.'
# Read in each line from the file you just created, learning_python.txt, 
# and replace the word Python with the name of another language, such as 
# C. Print each modified line to the screen.
def ex10_2():
    """Demonstrates use of the replace() method."""
    path = Path('learning_python.txt')
    text = path.read_text()

    for line in text.splitlines():
        print(line.replace('Python', 'Ruby'))

# 10-3.	Simpler Code: The program file_reader.py in this section uses a 
# temporary variable, lines, to show how splitlines() works. You can 
# skip the temporary variable and loop directly over the list that 
# splitlines() returns:
# for line in contents.splitlines():
# Remove the temporary variable from each of the programs in this 
# section, to make them more concise.
def ex10_3():
    """Demonstrates looping directly over the list without using a
    variable.
    """
    path = Path('pi_digits.txt')
    contents = path.read_text()

    # Original code:
    # lines = contents.splitlines()
    # for line in lines:
    #     print(line)

    for line in contents.splitlines():
        print(line)

# 10-4.	Guest: Write a program that prompts the user for their name. 
# When they respond, write their name to a file called guest.txt.
def ex10_4():
    """Takes name input from user and writes to guest.txt."""
    user_name = str(input("What is your name? "))
    Path('guest.txt').write_text(user_name.title())

# 10-5.	Guest Book: Write a while loop that prompts users for their 
# name. Collect all the names that are entered, and then write these 
# names to a file called guest_book.txt. Make sure each entry appears on 
# a new line in the file.
def ex10_5():
    names = ""
    counter = 1

    print("Enter your name to record it in the guestbook.\n"
        "Type 'quit' to quit.")
    
    while True:
        print(f"Name #{counter}: ", end='')
        counter += 1
        name = str(input())
        
        if name.lower() != 'quit':
            names += name.title() + '\n'

        else:
            break
    
    Path('guest_book.txt').write_text(names)

# 10-6.	Addition: One common problem when prompting for numerical input 
# occurs when people provide text instead of numbers. When you try to 
# convert the input to an int, you’ll get a ValueError. Write a program 
# that prompts for two numbers. Add them together and print the result. 
# Catch the ValueError if either input value is not a number, and print 
# a friendly error message. Test your program by entering two numbers 
# and then by entering some text instead of a number.
def ex10_6():
    """Try-Except Demonstration."""  
    while True:
        first_number = input("Input the first number: ")
        second_number = input("Input the second number: ")

        try:
            first_number = int(first_number)
        except ValueError:
            print("Non-numerics detected in first number. Try again!")
            continue

        try:
            second_number = int(second_number)
        except ValueError:
            print("Non-numerics detected in second number. Try again!")
            continue

        break

    print(f"The sum of your numbers, {first_number} and {second_number},"
        f" is {first_number + second_number}.")

# 10-7.	Addition Calculator: Wrap your code from Exercise 10-5 in a 
# while loop so the user can continue entering numbers, even if they 
# make a mistake and enter text instead of a number.
def ex10_7():
    """Wrap 10-5 in a while loop."""
    # Already done for both 10-5 and 10-6, 10-5 in instructions a typo?
    pass  

# 10-8.	Cats and Dogs: Make two files, cats.txt and dogs.txt. Store at 
# least three names of cats in the first file and three names of dogs in 
# the second file. Write a program that tries to read these files and 
# print the contents of the file to the screen. Wrap your code in a 
# try-except block to catch the FileNotFound error, and print a friendly 
# message if a file is missing. Move one of the files to a different 
# location on your system, and make sure the code in the except block 
# executes properly.
def ex10_8():
    """Demonstrates try-except used with read_text() functionality."""
    path_cat_names = Path('cats.txt')
    path_dog_names = Path('dogs.txt')

    for path in (path_cat_names, path_dog_names):
        print(f"\n{str(path)[:3].title()} names:")
        try:    
            for name in path.read_text().splitlines():
                print(name.title())

        except FileNotFoundError:
            print(f"{path.name} not found.")

# 10-9.	Silent Cats and Dogs: Modify your except block in Exercise 10-7 
# to fail silently if either file is missing.
def ex10_9():
    """Exercise 10-8 but the except block fails silently."""
    path_cat_names = Path('cats.txt')
    path_dog_names = Path('dogs.txt')

    for path in (path_cat_names, path_dog_names):
        print(f"\n{str(path)[:3].title()} names:")
        try:    
            for name in path.read_text().splitlines():
                print(name.title())

        except FileNotFoundError:
            pass

# 10-10. Common Words: Visit Project Gutenberg (https://gutenberg.org) 
# and find a few texts you’d like to analyze. Download the text files 
# for these works, or copy the raw text from your browser into a text 
# file on your computer.
# You can use the count() method to find out how many times a word or 
# phrase appears in a string. For example, the following code counts the 
# number of times 'row' appears in a string:
# >>> line = "Row, row, row your boat"
# >>> line.count('row')
# 2
# >>> line.lower().count('row')
# 3
# Notice that converting the string to lowercase using lower() catches 
# all appearances of the word you’re looking for, regardless of how it’s 
# formatted.
# Write a program that reads the files you found at Project Gutenberg 
# and  determines how many times the word 'the' appears in each text. 
# This will be an approximation because it will also count words such as 
# 'then' and 'there'. Try counting 'the ', with a space in the string, 
# and see how much lower your count is.
def ex10_10():
    """Counts occurrences of 'the' in texts from Project Gutenberg."""
    p = Path('ex10-10-full-texts')

    def count_the(path):
        """Opens path and counts instances of the 
        specified string in file.
        """
        p = Path(path)
        search_string = 'the '
        contents = p.read_text().lower()
        count = contents.count(search_string)
        return count

    for text_file in p.iterdir(): 
        count = count_the(text_file)
        print(f"The word {search_string.strip()} shows up {count}"
        f" times in {text_file}.")

# 10-11. Favorite Number: Write a program that prompts for the user’s 
# favorite number. Use json.dumps() to store this number in a file. 
# Write a separate program that reads in this value and prints the 
# message “I know your favorite number! It’s _____.”
def ex10_11():
    """Demonstrates json.dumps() and json.loads() functionality."""
    p = Path('ex10-11-json-dumps-demo.json')
    fav_num = str(input("What is your favorite number? "))
    to_write = json.dumps(fav_num)
    p.write_text(to_write)

    input("Will now read your number from the .json.\n"
        "Press any key to continue...")
    contents = p.read_text()
    numbers = json.loads(contents)
    print(f"\nI know your favorite number! It's {numbers}.")

# 10-12. Favorite Number Remembered: Combine the two programs you wrote 
# in Exercise 10-11 into one file. If the number is already stored, 
# report the favorite number to the user. If not, prompt for the user’s 
# favorite number and store it in a file. Run the program twice to see 
# that it works.
def ex10_12():
    """Updated ex10-11 to auto-read if the file exists."""
    p = Path('ex10-11-json-dumps-demo.json')

    def write_to_json():
        fav_num = str(input("What is your favorite number? "))
        to_write = json.dumps(fav_num)
        p.write_text(to_write)

    def read_json():
        contents = p.read_text()
        numbers = json.loads(contents)
        print(f"\nI know your favorite number! It's {numbers}.")

    if p.exists() == True:
        print(".json found. Skipping to reading .json.")
        read_json()
    
    else:
        write_to_json()
        read_json()

# 10-13. User Dictionary: The remember_me.py example only stores one 
# piece of information, the username. Expand this example by asking for 
# two more pieces of information about the user, then store all the 
# information you collect in a dictionary. Write this dictionary to a 
# file using json.dumps(), and  using json.loads(). Print a summary 
# showing exactly what your program remembers about the user.
def ex10_13():
    def get_stored_userdata(path):
        """Get stored username if available."""
        if path.exists():
            contents = path.read_text()
            user_dict = json.loads(contents)
            return user_dict
        else:
            return None

    def get_new_userdata(path):
        """Prompt for a new username."""
        user_dict = {}
        user_dict['username'] = input("What is your name? ").lower()
        user_dict['age'] = input("What is your age? ").lower()
        user_dict['fav_music'] = input("What is your favorite "
            "type of music? ").lower()

        contents = json.dumps(user_dict)
        path.write_text(contents)
        return user_dict

    def greet_user():
        """Greet the user by name."""
        path = Path('user_dict.json')
        user_dict = get_stored_userdata(path)
        if user_dict:
            print(f"Welcome back, {user_dict['username'].title()}!")
            print(f"You are {user_dict['age']}, and you like "
                f"{user_dict['fav_music'].title()}, right?")
        else:
            user_dict = get_new_userdata(path)
            print(f"We'll remember you when you come back, "
                f"{user_dict['username'].title()}!")

    greet_user()

# 10-14. Verify User: The final listing for remember_me.py assumes 
# either that the user has already entered their username or that the 
# program is running for the first time. We should modify it in case the 
# current user is not the person who last used the program.
# Before printing a welcome back message in greet_user(), ask the user 
# if this is the correct username. If it’s not, call get_new_username() 
# to get the correct username.
def ex10_14():
    def get_stored_username(path):
        """Get stored username if available."""
        if path.exists():
            contents = path.read_text()
            username = json.loads(contents)
            return username
        else:
            return None

    def get_new_username(path):
        """Prompt for a new username."""
        username = input("What is your name? ")
        contents = json.dumps(username)
        path.write_text(contents)
        return username

    def greet_user():
        """Greet the user by name."""
        path = Path('username.json')
        username = get_stored_username(path)

        if username:
            correct_user = input(f"Is {username} the correct username? (Y/N) ")
            
            if correct_user.lower() == 'y':
                print(f"Welcome back, {username}!")

            else:
                username = get_new_username(path)
                print(f"We'll remember you when you come back, {username}!")

        else:
            username = get_new_username(path)
            print(f"We'll remember you when you come back, {username}!")

    greet_user()


while True:
    try:
        chapter = 10
        exercises = '1-14'
        print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
        execute_func = input("Run exercise #: ")
        
        if execute_func.lower() == 'q':
            break

        exec(f"ex{chapter}_{execute_func}()")
        print()
    
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")
