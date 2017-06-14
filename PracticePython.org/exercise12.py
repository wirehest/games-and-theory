""" Exercise 12

Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function.
"""
a = [5, 10, 15, 20, 25]

def alpha_omega(input_list):
    return [input_list[0], input_list[-1]]

first_and_last = alpha_omega(a)
print(f"Your list:\n{a}\n")
print(f"List with first and last element only:\n{first_and_last}")
