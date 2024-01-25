import random
secret_number = random.randint(1, 20)
print('Guess a number between 1 and 20.')

for guesses_taken in range(1, 7):
    print('Take a guess.')
    guess = int(input())

    if guess < secret_number:
        print('Too low.')
    elif guess > secret_number:
        print('Too high.')
    else:
        break

if guess == secret_number:
    print('You guessed correctly! You took ' + str(guesses_taken) + ' guesses.')

else:
    print('Sorry. The number was ' + str(secret_number) + '.')
