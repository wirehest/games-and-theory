# 2-1. Simple Message: Assign a message to a variable, and then print 
# that message.
def ex2_1():
    var = "This is a sample message for 2-1."
    print(var)

# 2-2. Simple Messages: Assign a message to a variable, and print that 
# message. Then change the value of the variable to a new message, and 
# print the new message. 
def ex2_2():
    var = "This is a sample message for 2-2."
    print(var)
    var = "Same var, new message."
    print(var)

# 2-3. Personal Message: Use a variable to represent a person’s name, 
# and print a message to that person. Your message should be simple, 
# such as, “Hello Eric, would you like to learn some Python today?”
def ex2_3():
    name_var = "Ronald Raygun"
    print(f"Hello, {name_var}! How is your day?")

# 2-4. Name Cases: Use a variable to represent a person’s name, and then 
# print that person’s name in lowercase, uppercase, and title case. 
def ex2_4():
    name_var = "ronald RAYGUN"
    print(f"Hi {name_var}.\nPrinting your name in:")
    print(f"Lower case: {name_var.lower()}")
    print(f"Upper case: {name_var.upper()}")
    print(f"Title case: {name_var.title()}")

# 2-5. Famous Quote: Find a quote from a famous person you admire. Print 
# the quote and the name of its author. Your output should look 
# something like the following, including the quotation marks: Albert 
# Einstein once said, “A person who never made a mistake never tried 
# anything new.” 
def ex2_5():
    print(f"\"Dead men are heavier than broken hearts.\"")
    print(f"\n\t\t- Raymond Chandler")

# 2-6. Famous Quote 2: Repeat Exercise 2-5, but this time, represent the 
# famous person’s name using a variable called famous_person. Then compose 
# your message and represent it with a new variable called message. 
# Print your message. 
def ex2_6():
    message = '"Dead men are heavier than broken hearts."'
    famous_person = '\n\t\t- Raymond Chandler'
    print("Repeating 2-5 with variables:")
    print(message)
    print(famous_person)

# 2-7. Stripping Names: Use a variable to represent a person’s name, and 
# include some whitespace characters at the beginning and end of the name. 
# Make sure you use each character combination, "\t" and "\n", at least 
# once. Print the name once, so the whitespace around the name is 
# displayed. Then print the name using each of the three stripping 
# functions, lstrip(), rstrip(), and strip(). 
def ex2_7():
    name_var = '\n\t\t   Ethan    \t'
    print(f"Unmodified name_var: |{name_var}|")
    print(f"Applying lstrip(): |{name_var.lstrip()}|")
    print(f"Applying rstrip(): |{name_var.rstrip()}|")
    print(f"Applying strip(): |{name_var.strip()}|")

# 2-8. File Extensions: Python has a removesuffix() method that works 
# exactly like removeprefix(). Assign the value 'python_notes.txt' to a 
# variable called filename. Then use the removesuffix() method to display 
# the filename without the file extension, like some file browsers do. 
def ex2_8():
    filename = 'python_notes.txt'
    print(f"filename: {filename}")
    print(f"Applying removesuffix('.txt'): {filename.removesuffix('.txt')}")

# 2-9. Number Eight: Write addition, subtraction, multiplication, and 
# division operations that each result in the number 8. Be sure to 
# enclose your operations in print() calls to see the results. You 
# should create four lines that look like this: print(5+3) Your output 
# should be four lines, with the number 8 appearing once on each line.
def ex2_9():
    print(f" 2 + 6 = {2 + 6}")
    print(f"15 - 7 = {15 - 7}")
    print(f" 4 * 2 = {4 * 2}")
    print(f"24 / 3 = {24 / 3}")            

# 2-10. Favorite Number: Use a variable to represent your favorite 
# number. Then, using that variable, create a message that reveals your 
# favorite number. Print that message.
def ex2_10():
    fav_num = 9
    print(f"My favorite number is {fav_num}.")
 
# 2-11. Adding Comments : Choose two of the programs you’ve written, and 
# add at least one comment to each. If you don’t have anything specific 
# to write because your programs are too simple at this point, just add 
# your name and the current date at the top of each program file. Then 
# write one sentence describing what the program does. 
def ex2_11():
    # This file is full of comments already.
    pass

# 2-12. Zen of Python: Enter import this into a Python terminal session 
# and skim through the additional principles. 
def ex2_12():
    # Done.
    pass

while True:
    chapter = 2
    exercises = '1-12'
    print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
    execute_func = input("Run exercise #: ")
    
    if execute_func.lower() == 'q':
        break

    exec(f"ex{chapter}_{execute_func}()")
    print()