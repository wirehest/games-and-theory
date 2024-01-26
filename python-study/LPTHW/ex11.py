# print("How old are you?", end=' ')
# age = input()
# print("How tall are you?", end=' ')
# height = input()
# print("How much do you weigh?", end=' ')
# weight = input()

# print(f"So, you're {age} years old, {height} tall, and {weight} heavy.")

from datetime import datetime

print("What year were you born?")
yob = int(input('--> '))

year = datetime.now().year
age = year - yob

# print(type(year))
# print(type(yob))

print(f"Ah, so you are {age} years old!")
