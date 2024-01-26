"""
Exercise 8

Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays (using input), compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)
"""

import random
import os
from collections import deque

#first_player = ""
#second_player = ""
#first_play = ""
#second_play = ""
#players = []
# first_mover = 0
#second_mover = 0
moves = ["ROCK", "PAPER", "SCISSORS"]
# tie_counter = 0

def game_start():
    """ Takes initial input of players' names and returns list of players """
    clear_screen()
    player1 = input("Enter Player 1's name: ")
    player2 = input("Enter Player 2's name: ")
    players = [player1, player2]

    return players

def random_start(player_list):
    """ Randomly selects the player who will start """
    first_mover = random.choice([0, 1])
    second_mover = abs(first_mover - 1)
    clear_screen()

    print("I have randomly selected.\n" + player_list[first_mover] + " will start.")
    input("\n\nPress any key to continue.")

    return first_mover, second_mover

def get_inputs(first_mover, second_mover, player_list):
    """ Takes the players' moves """
    first_move = ""
    second_move = ""
    clear_screen()
    while first_move not in moves:
        first_move = input(f"{player_list[first_mover]}, enter ROCK, PAPER, or SCISSORS: ")
        clear_screen()

    while second_move not in moves:
        second_move = input(f"{player_list[second_mover]}, enter ROCK, PAPER, or SCISSORS: ")
        clear_screen()

    return first_move, second_move

def assess(first_move, second_move, first_mover, second_mover, player_list):
    """ Rotates the moves list to standardize win/lose scenarios and assesses players' moves accordingly """
    moves_rotated = list_rotation(moves, moves.index(first_move))

    print(f"{player_list[first_mover]} played: {first_move}\t\t{player_list[second_mover]} played: {second_move}\n")

    if second_move == moves_rotated[0]:
        print(f"You both made the same move. Tie.")
    elif second_move == moves_rotated[1]:
        print(f"{second_move} beats {first_move}. {player_list[second_mover]} wins!")
    elif second_move == moves_rotated[2]:
        print(f"{first_move} beats {second_move}. {player_list[first_mover]} wins!")
    else:
        dead()
        # tie_counter += 1

def clear_screen():
    """ Clears the terminal screen """

    os.system('cls||clear')

def dead():
    """ Message function for IF...ELSE loop completion """

    print("Some kind of error.")
    exit(0)

def list_rotation(l, n):
    """ Rotates list l by spaces n """

    return l[n:] + l[:n]

def game_loop():
    """ Runs the game, then prompts for another game. Terminates if necessary. """

    play_game = "YES"
    while play_game == "YES":
        players = game_start()
        first_player, second_player = random_start(players)
        first_play, second_play = get_inputs(first_player, second_player, players)

        assess(first_play, second_play, first_player, second_player, players)
        play_game = input("\nWould you like to play again? YES or NO?: ")

game_loop()
