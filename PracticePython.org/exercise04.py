"""
Exercise 4

Create a program that asks the user for a number and then prints out a list of all the divisors of that number.
(If you don’t know what a divisor is, it is a number that divides evenly into another number. For example, 13 is a divisor of 26 because 26 / 13 has no remainder.)
"""

numb = int(input("Input a number: "))
test_list = range(2, numb)
divisors = [1]

for i in test_list:
    if numb % i == 0:
        divisors.append(i)

divisors.append(numb)

print("{}'s divisors are:\n{}".format(numb, divisors))
