from datetime import datetime

print("Enter your name and age when prompted.")

name = input("Your name? ")
age = int(input("Your age? "))
centennial = 100 - age + datetime.now().year

message = f"Hi, {name}, if you are {age} now, you will turn 100 in the year {centennial}.\n"

print(message)
print("Now give me a random number.")

rando = int(input("> "))
counter = 0

while counter < rando:
    print(message)
    counter += 1
