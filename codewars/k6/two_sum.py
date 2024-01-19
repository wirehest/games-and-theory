#!/usr/bin/env python3


import itertools


def two_sum(numbers, target):
    """Finds a pair of numbers from input list that sum to target.
    Returns a tuple of these indices."""
    indices = ()
    pairs = itertools.permutations(range(len(numbers)), 2)

    for p in pairs:
        if numbers[p[0]] + numbers[p[1]] == target:
            indices = (p[0], p[1])
        else:
            continue
    
    return indices

assert two_sum([1, 2, 3], 4) == (0, 2) or (2, 0)
assert two_sum([3, 2, 4], 6) == (1, 2) or (2, 1)
