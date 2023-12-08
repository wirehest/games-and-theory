#! python3

import logging
import copy

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
logging.disable(logging.CRITICAL)

filepath = 'day05input.txt'

def load_puzzle_input(filepath):
    """Loads puzzle input file."""
    path = Path(filepath)
    puzzle_input = path.read_text()

    return puzzle_input

def make_puzzle_vars(puzzle_input, part=1):
    """Makes variables with puzzle data."""
    puzzle_split = puzzle_input.split(':')

    
    seeds = puzzle_split[1].strip().split('\n')
    seeds = seeds[0].split(' ')
    seeds = [int(x) for x in seeds]
    
    if part == 2:
        temp = []
        zip1 = range(0, len(seeds), 2)
        zip2 = range(1, len(seeds), 2)        
        
        for x, y in zip(zip1, zip2):
            temp += [seed for seed in range(seeds[x], seeds[y])]
        
        seeds = temp

    seed_to_soil = puzzle_split[2]
    soil_to_fert = puzzle_split[3]
    fert_to_water = puzzle_split[4]
    water_to_light = puzzle_split[5]
    light_to_temp = puzzle_split[6]
    temp_to_humid = puzzle_split[7]
    humid_to_loc = puzzle_split[8]

    mappings = (seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc)
    final_maps = []

    for mapping in mappings:
        mapping = mapping.strip().splitlines()
        if mapping[-1].replace(' ', '').replace('-', '').isalpha():
            mapping = mapping[:-2]

        map_dict = make_maps(mapping)
        final_maps.append(map_dict)

    seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc = final_maps

    #logging.info(f"seed_to_soil: {seed_to_soil}\nlen:{len(seed_to_soil)}")
    #input()
    
    return seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc

def make_maps(mapping):
    """Makes variables for 'maps,' specifically."""
    map_dict = {}
    for line in mapping:
        y = [int(x) for x in line.split(' ')]
        source_start = y[0]
        destination_start = y[1]
        range1 = y[2]
        map_dict[source_start] = destination_start, range1
    
    return map_dict

def follow_maps(seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc):
    """Follows numbers through mappings, from seed to location."""
    mappings = (seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc)
    locations = []

    for seed in seeds:
        for mapping in mappings:
            logging.info(f"\nseed: {seed}\nmapping: {mapping}")
            for key in mapping.keys():
                delta = abs(key - seed)
                #key_smol = round(key / 100_000_000, 3)
                #key_end_smol = round((key + mapping[key][1]) / 100_000_000, 3)
                #logging.info(f"key: {round(seed / 100_000_000, 3)} "
                #    f"range: {key_smol}-{key_end_smol}")
                #input()
                if seed in range(key, key + mapping[key][1]):
                    key = key + mapping[key][0] + delta
                    logging.info(f"Match found. New key: {key}")
                    break
                else:
                    continue

        locations.append(key)
    return locations

"""seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc = make_puzzle_vars(load_puzzle_input(filepath))

locations = follow_maps(seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc)
logging.info(f"seeds: {len(seeds)}\n{seeds}")
logging.info(f"locations:{len(locations)}\n{locations}")
"""

puzzle_input = load_puzzle_input(filepath)
seeds, seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc = make_puzzle_vars(puzzle_input, 2)

"""logging.info(f"seeds:\n{seeds}")
input()
logging.info(f"seed_to_soil:\n{seed_to_soil}")
input()
logging.info(f"soil_to_fert:\n{soil_to_fert}")
input()
logging.info(f"fert_to_water:\n{fert_to_water}")
input()
logging.info(f"water_to_light:\n{water_to_light}")
input()
logging.info(f"light_to_temp:\n{light_to_temp}")
input()
logging.info(f"temp_to_humid:\n{temp_to_humid}")
input()
logging.info(f"humid_to_loc:\n{humid_to_loc}")"""

mappings = seed_to_soil, soil_to_fert, fert_to_water, water_to_light, light_to_temp, temp_to_humid, humid_to_loc

locations = []
for seed in seeds:
    x = seed
    logging.info(f"x: {x} seed: {seed} seeds: {seeds}")

    while True:
        for i, mapping in enumerate(mappings):
            logging.info(f"mapping #{i + 1}/{len(mappings)}: {mapping}")
            for dst in mapping.keys():
                src = mapping[dst][0]
                r = mapping[dst][1]

                if x in range(src, src + r):
                    logging.info(f"x: {x}, range({src}, {src + r}) FOUND")
                    delta = x - src
                    logging.info(f"delta: {delta}, {dst} + {delta}"
                        f" -> {dst + delta}")
                    x = dst + delta
                    #input()
                    break
                else:
                    logging.info(f"x: {x}, range({src}, {src + r}) X")
                    continue


            if i + 1 == len(mappings):
                locations.append(x)
                logging.info(f"locations: {locations}")
                break
        break
    logging.info("while loop end")
    #input()

print(f"min. loc.: {min(locations)}")
