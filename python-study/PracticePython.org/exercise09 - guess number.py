"""
Exercise 9

Generate a random number between 1 and 9 (including 1 and 9). Ask the user to guess the number, then tell them whether they guessed too low, too high, or exactly right. (Hint: remember to use the user input lessons from the very first exercise)

Extras:
Keep the game going until the user types “exit”
Keep track of how many guesses the user has taken, and when the game ends, print this out.
"""

import random

my_number = random.randint(1, 9)
guess_counter = 0
print("I have picked a number between 1 and 9 (1 and 9 included).\nTry and guess it!")

def get_guess():
    global guess_counter
    player_input = None

    while type(player_input) != int:
        try:
            player_input = input("Enter your guess, or type 'exit': ")

            if player_input == "exit":
                break

            guess_counter += 1
            assess_number(my_number, int(player_input), guess_counter)
            break

        except ValueError:
            print("I didn't understand.\nPlease try again (enter numerals), or type 'exit'.")

    print("Exiting...")
    exit(0)

def assess_number(the_number, guess, guess_counter):
    if guess == the_number:
        print("You guessed my number!")
        print(f"It took you {guess_counter} guesses!")
        exit(0)
    elif guess < the_number:
        print("Your guess is lower. Try again.")
        get_guess()
    elif guess > the_number:
        print("Your guess is higher. Try again.")
        get_guess()
    else:
        exit(0)

get_guess()
