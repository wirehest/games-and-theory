""" Exercise 15

Write a program (using functions!) that asks the user for a long string containing multiple words. Print back to the user the same string, except with the words in backwards order. For example, say I type the string:
  My name is Michele
Then I would see the string:
  Michele is name My
shown back to me.
"""

user_string = str(input("Give me a string:\n>"))

def flip_string(input_string):
    string_as_list = input_string.split()
    return " ".join(string_as_list[::-1])

    # as one line with no local var declared
    # return " ".join(input_string.split()[::-1])

print(flip_string(user_string))
