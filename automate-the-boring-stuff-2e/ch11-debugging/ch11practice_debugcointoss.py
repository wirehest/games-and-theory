"""
c11prac_debugcointoss.py

The following program is meant to be a simple coin toss guessing game. The player gets two guesses (it’s an easy game). However, the program has several bugs in it. Run through the program a few times to find the bugs that keep the program from working correctly.

import random
guess = ''
while guess not in ('heads', 'tails'):
    print('Guess the coin toss! Enter heads or tails:')
    guess = input()
toss = random.randint(0, 1) # 0 is tails, 1 is heads
if toss == guess:
    print('You got it!')
else:
    print('Nope! Guess again!')
    guesss = input()
    if toss == guess:
        print('You got it!')
    else:
        print('Nope. You are really bad at this game.')
"""
import logging
import random

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(logging.CRITICAL)

guess = ''
while guess not in ('heads', 'tails'):
    logging.debug('while loop start')

    print('Guess the coin toss! Enter heads or tails:')
    guess = input().lower()

    logging.debug(f'Guess #1 = {guess}')

# toss = random.randint(0, 1) # 0 is tails, 1 is heads
toss = 'tails' if random.randint(0, 1) == 0 else 'heads'

logging.debug(f'toss = {toss}, guess = {guess}')
logging.debug('if start')
if toss == guess:

    print('You got it!')
else:
    logging.debug('else start')

    print('Nope! Guess again!')
    guess = input().lower()
    logging.debug('Guess #2 = {guess}')

    if toss == guess:
        print('You got it!')

    else:
        print('Nope. You are really bad at this game.')
