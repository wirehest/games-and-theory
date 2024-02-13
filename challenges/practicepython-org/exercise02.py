num = int(input("Input a number: "))
check = int(input("Input a second number: "))

if num % check != 0:
    check_string = ""
else:
    check_string = f"It appears that {check} divides evenly into {num} as well."

if (num % 2 != 0):
    print(f"{num} is an odd number. {check_string}")
elif (num / 4 >= 1):
    print(f"{num} is an even number, and also divisible by 4. {check_string}")
else:
    print(f"{num} is an even number. {check_string}")
