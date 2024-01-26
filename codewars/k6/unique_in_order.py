#!/usr/bin/env python3

"""unique_in_order.py
Unique In Order
Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with the same 
value next to each other and preserving the original order of 
elements.
"""


def unique_in_order(sequence):
    """Returns a list with adjacent duplicates removed."""
    uniques = []
    try:
        uniques = [sequence[0]]
    except IndexError:
        return uniques
    else:
        for i in range(1, len(sequence)):
            if sequence[i] == uniques[-1]:
                continue
            else:
                uniques.append(sequence[i])

        return uniques