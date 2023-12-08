import random, sys

print('RPS')

# vars keeping track of wins, losses, ties
wins = 0
losses = 0
ties = 0

while True: # main game loop
    print('%s Wins, %s Losses, %s Ties' % (wins, losses, ties))
    while True: # player input loop
        print('Enter your move: (r)ock (p)aper (s)cissors or (q)uit')
        player_move = input()
        if player_move == 'q':
            sys.exit() # quits
        if player_move == 'r' or player_move == 'p' or player_move == 's':
            break # break out of player input loop
        print('Type one of r, p, s, or q')

    # display player choice
    if player_move == 'r':
        print('ROCK vs...')
    if player_move == 'p':
        print('PAPER vs...')
    if player_move == 's':
        print('SCISSORS vs...')

    # display computer choice
    random_number = random.randint(1, 3)
    if random_number == 1:
        computer_move = 'r'
        print('ROCK')
    if random_number == 2:
        computer_move = 'p'
        print('PAPER')
    if random_number == 3:
        computer_move = 's'
        print('SCISSORS')

    # display and record win/loss
    if player_move == computer_move:
        print('Tie!')
        ties += 1
    if player_move == 'r' and computer_move == 's':
        print('You win!')
        wins += 1
    if player_move == 'p' and computer_move == 'r':
        print('You win!')
        wins += 1
    if player_move == 's' and computer_move == 'p':
        print('You win!')
        wins += 1
    if player_move == 'r' and computer_move == 'p':
        print('You lose!')
        losses += 1
    if player_move == 'p' and computer_move == 's':
        print('You lose!')
        losses += 1
    if player_move == 's' and computer_move == 'r':
        print('You lose!')
        losses += 1


