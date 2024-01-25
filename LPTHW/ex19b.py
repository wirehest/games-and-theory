from sys import argv

script, x, y, z = argv

def my_function(arg1, arg2, arg3):
        print(f"Addition: {arg1} + {arg2} + {arg3} =", arg1 + arg2 + arg3)
        print(f"Subtraction: {arg1} - {arg2} - {arg3} =", arg1 - arg2 - arg3)
        print(f"Multiplication: {arg1} * {arg2} * {arg3} =", arg1 * arg2 * arg3, "\n")

print("Input three numbers.")
var1 = input("First Number? ")
var2 = input("Second Number? ")
var3 = input("Third Number? ")

my_function(1, 2, 3)

a = 4
b = 5
c = 6

my_function(a, b, c)

my_function(1 + 2, 3 + 5, 6 - 7)

my_function(1 + a, 3 + b, 5 + c)

my_function(int(x), int(y), int(z))

my_function(int(var1), int(var2), int(var3))
