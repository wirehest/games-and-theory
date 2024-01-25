"""
Exercise 5

Take two lists, say for example these two:
  a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
and write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.
Extras:
Randomly generate two lists to test this
Write this in one line of Python (don’t worry if you can’t figure this out at this point - we’ll get to it soon)
"""

import random

# a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
# b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

maximum = int(input("Max value of list elements: "))

rand = int(input("Size of first list: "))
a = random.sample(range(maximum), rand)

rand = int(input("Size of second list: "))
b = random.sample(range(maximum), rand)

print(f"a: {a}\nb: {b}")

common = []
for i in a:
    if ( i in b ) == True:
        common.append(i)

# set_list = set(common)
# common = list(set_list)

print(f"Common elements: {common}")
