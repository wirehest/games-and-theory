#!/usr/bin/env python3

"""split_strings.py
Complete the solution so that it splits the string into pairs of two 
characters. If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an 
underscore ('_').
"""


def solution(s):
    """Takes input string and returns list of two-character pairs.
    Odd-length strings have an underscore appended.
    """
    split = []
    s += '_' if len(s) % 2 != 0 else ''
    i = 0

    while i < len(s) - 1:
        split.append(s[i] + s[i+1])
        i += 2
        
    return split
