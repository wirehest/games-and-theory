#! python3

"""Advent of Code 2023: Day 11."""

import logging

from pathlib import Path
from itertools import combinations

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
logging.disable(logging.CRITICAL)


def load_puzzle_input(filepath):
    """Loads puzzle input file."""
    path = Path(filepath)
    puzzle_input = path.read_text()
    return puzzle_input


def make_puzzle_vars(puzzle_input):
    """Makes workable puzzle variable(s)."""
    puzzle_map = puzzle_input.splitlines()
    return puzzle_map


def find_empties(puzzle_map):
    """Finds empty rows and columns."""
    empty = []
    rows = range(len(puzzle_map))
    cols = range(len(puzzle_map[0]))
    empty_rows, empty_cols = set(rows), set(cols)

    for x, row in enumerate(puzzle_map):
        for y, char in enumerate(row):
            if char == '#':
                empty_rows -= {x}
                empty_cols -= {y}
            else:
                continue

    return [(sorted(empty_rows, reverse=True)), 
        (sorted(empty_cols, reverse=True))]


def expand(puzzle_map, empties, part):
    """Expands the universe."""
    factor = 1 if part == 1 else 1_000_000 - 1
    p = puzzle_map[:]
    row_len = len(p[0])
    for empty_row in empties[0]:
        factor_loop = factor
        while factor_loop > 0:
            p.insert(empty_row, '.' * row_len)
            factor_loop -= 1

    for empty_col in empties[1]:
        for i, row in enumerate(p):
            p[i] = row[:empty_col] + ('.' * factor) + row[empty_col:]

    return p


def find_paths(puzzle_map):
    """Creates galaxy combinations and finds all distances."""
    counter = 1
    galaxies = {}
    paths = []
    for x, row in enumerate(puzzle_map):
        for y, char in enumerate(row):
            if char == '#':
                galaxies[counter] = (x, y) 
                counter += 1
    
    combos = combinations(galaxies.keys(), 2)
    logging.info(f"galaxies: {galaxies}")

    for pair in combos:
        logging.info(f"pair: {pair}")
        a = pair[0]
        b = pair[1]
        logging.info(f"pair: {pair}")
        logging.info(f"a: {galaxies[a]} b: {galaxies[b]}")
        path = (abs(galaxies[a][0] - galaxies[b][0]) +
            abs(galaxies[a][1] - galaxies[b][1]))
        paths.append(path)

    logging.info(paths)
    return(sum(paths))

def main_loop(filepath):
    """Main loop to call sub-functions."""
    puzzle_input = load_puzzle_input(filepath)
    puzzle_map = make_puzzle_vars(puzzle_input)
    empties = find_empties(puzzle_map)
    
    logging.info(f"empties: {empties}")

    puzzle_map1 = expand(puzzle_map, empties, 1)
    #puzzle_map2 = expand(puzzle_map, empties, 2)
    tally1 = find_paths(puzzle_map1)
    #tally2 = find_paths(puzzle_map2)
    print(f"Part 1: {tally1}")

    


main_loop('day11input.txt')