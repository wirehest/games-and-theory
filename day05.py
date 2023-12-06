#! python3

import logging
import copy

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
#logging.disable(logging.CRITICAL)

filepath = 'day05input.txt'

def load_puzzle_input(filepath):
    """Loads puzzle input file."""
    path = Path(filepath)
    puzzle_input = path.read_text()

    return puzzle_input

def make_puzzle_vars(puzzle_input):
    """Makes variables with puzzle data."""
    puzzle_dict = {}
    puzzle_split = puzzle_input.split(':')
    #logging.info(f"{puzzle_split}\nlen:{len(puzzle_split)}")

    seeds = puzzle_split[1].strip().split('\n')
    seeds = seeds[0].split(' ')

    seed_to_soil = puzzle_split[2]
    soil_to_fert = puzzle_split[3]
    fert_to_water = puzzle_split[4]
    water_to_light = puzzle_split[5]
    light_to_temp = puzzle_split[6]
    temp_to_humid = puzzle_split[7]
    humid_to_loc = puzzle_split[8]

    return seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc

def make_maps():
    """Makes variables for 'maps,' specifically."""
    pass

seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc = make_puzzle_vars(load_puzzle_input(filepath))

#logging.info(seeds)
logging.info(seed_to_soil)