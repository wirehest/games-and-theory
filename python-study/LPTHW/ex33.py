"""
i = 0
numbers = []
while i < 6:
    print(f"At the top i is {i}")
    numbers.append(i)

    i += 1
    print("Numbers now: ", numbers)
    print(f"At the bottom i is {i}")

print("The numbers: ")

for num in numbers:
    print(num)
"""

j = int(input("Max increments? "))
k = int(input("Increment amount? "))
numbers = []

# Using while loop
def while_incrementer(max_count, increment_amount):
    i = 0
    while i < max_count:
        print(f"Top: {i}")
        numbers.append(i * increment_amount)
        i += 1

        print(f"Using while loop; list now: {numbers}")
        print(f"Bottom: {i}")

while_incrementer(j, k)
numbers.clear()

# Using for_loop
def for_incrementer(max_count, increment_amount):
    for x in list(range(0, max_count)):
        numbers.append(x * increment_amount)
        print(f"Top: {x}\nUsing for loop; list now: {numbers}\nBottom: {x}")

for_incrementer(j, k)
numbers.clear()

# Using list comprehension
def listcomp_incrementer(max_count, increment_amount):
    numbers = [x * increment_amount for x in list(range(0, max_count))]
    print(f"Using list comprehension; list now: {numbers}")

listcomp_incrementer(j, k)
