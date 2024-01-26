"""
Exercise 6

Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)
"""

user_string = input("Give me a string: ")

reversal = []
counter = int(len(user_string))

while counter > 0:
    reversal.append(user_string[counter - 1])
    counter -= 1

reversal_string = "".join(str(x) for x in reversal)

print("User's String:   ", user_string)
print("Reversed String: ", reversal_string)

if reversal_string.lower() == user_string.lower():
    print(f"The string \"{user_string}\" is a palindrome.")

else:
    print(f"The string \"{user_string}\" is NOT a palindrome.\n")


# Alternate solution
print("Alternate method:\n")

print("User's String:   ", user_string)
print("Reversed String: ", user_string[::-1])

if user_string[::-1] == user_string:
    print(f"The string \"{user_string}\" is a palindrome.")
else:
    print(f"The string \"{user_string}\" is NOT a palindrome.\n")
