#! python3

import logging
import copy

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
#logging.disable(logging.CRITICAL)

def make_puzzle_data(filepath):
    """Loads puzzle input and makes puzzle_data."""
    path = Path(filepath)
    puzzle_input = path.read_text()
    puzzle_data = []
    symbols_str = identify_symbols(puzzle_input)

    for line in puzzle_input.splitlines():
        line_str = ''

        for char in line:
            if char in symbols_str:
                line_str += 'S'
            else:
                line_str += char

        puzzle_data.append(list(line_str))

    return puzzle_data

def identify_symbols(puzzle_input):
    """Identifies which symbols are used in puzzle_input."""
    symbols_str = ''

    for char in puzzle_input:
        if not (char == '.' or char.isalnum() or char in symbols_str):
            symbols_str += char
        else:
            continue

    return symbols_str

def identify_parts(puzzle_data):
    """ """
    nums = '0123456789'
    parts_positions = copy.deepcopy(puzzle_data)
    len_y = len(puzzle_data)
    len_x = len(puzzle_data[0])
    coords = [(y, x) for y in range(len_y) for x in range(len_x)] 
    pos_iter = [(n, m) for n in (-1, 0, 1) for m in (-1, 0, 1)]
    counter = 0

    for y, x in coords:
        if puzzle_data[y][x] in nums:
            for n, m in pos_iter:
                try:
                    puzzle_data[y + n][x + m]
                except IndexError:
                    continue

                if puzzle_data[y + n][x + m] == 'S':
                    parts_positions[y][x] = 'P'

    def check_adjacents():
        """ """
        for y, x in coords:
            if puzzle_data[y][x] in nums:            
                for i in (-1, 1):
                    try:
                        parts_positions[y][x + i]
                    except IndexError:
                        continue

                    if parts_positions[y][x + i] == 'P':
                        parts_positions[y][x] = 'P' 

    while counter < 3:
        check_adjacents()
        counter += 1

    return parts_positions

def collector(puzzle_data, parts_positions):
    len_y = len(puzzle_data)
    len_x = len(puzzle_data[0])
    coords = [(y, x) for y in range(len_y) for x in range(len_x)] 
    parts_list = []
    num_str = ''

    for y, x in coords:
        try:
            parts_positions[y][x - 1]
        except IndexError:
            continue

        if parts_positions[y][x] == 'P':
            #logging.info(f"{parts_positions[y][x]} {puzzle_data[y][x]}")
            num_str += puzzle_data[y][x]

        else:
            parts_list.append(num_str)
            num_str = ''
            continue

        logging.info(f"num_str: {num_str}")
        #parts_list.append(num_str)
        #num_str = ''

    return parts_list

def tally(parts_list):
    tally = 0
    for val in parts_list:
        try:
            tally += int(val)
        except ValueError:
            continue

    print(f"tally: {tally}")


puzzle_data = make_puzzle_data('day03input.txt')
parts_positions = identify_parts(puzzle_data)
parts_list = collector(puzzle_data, parts_positions)


#logging.info(f"puzzle_data: {puzzle_data[2]}")
#logging.info(f"parts_positions: {parts_positions[2]}")
logging.info(f"parts_list: {parts_list}")

tally(parts_list)
