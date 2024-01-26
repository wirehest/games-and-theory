""" Exercise 13

Write a program that asks the user how many Fibonnaci numbers to generate and then generates them. Take this opportunity to think about how you can use functions. Make sure to ask the user to enter the number of numbers in the sequence to generate.(Hint: The Fibonnaci seqence is a sequence of numbers where the next number in the sequence is the sum of the previous two numbers in the sequence. The sequence looks like this: 1, 1, 2, 3, 5, 8, 13, …)
"""

a = int(input("How many Fibonacci numbers to calculate?\n> "))

def calculate_fib(calc_count):
    """ Using while loop """
    starter = [0, 1]
    counter = 0

    if calc_count == 1: return [0]

    while counter < calc_count - 2:
        starter.append(starter[-1] + starter[-2])
        counter += 1

    return starter

print(calculate_fib(a))
