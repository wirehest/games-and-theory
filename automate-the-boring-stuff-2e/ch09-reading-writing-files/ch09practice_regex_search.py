"""
regex-search.py
Write a program that opens all .txt files in a folder and searches for any line that matches a user-supplied regular expression. The results should be printed to the screen.
"""

import os
import re
from pathlib import Path


# TODO get user regex
def get_regex():
    raw_regex = input('Enter regex pattern:\n')
    user_regex = re.compile(raw_regex)
    return user_regex

# TODO search and form list of all files
def find_text_files():
    p = Path.cwd()
    files = list(p.glob('*.txt'))
    print("\033c\033[3J", end='') # Clears screen.
    print('Text files in current working directory:')
    for f in files:
    #    print(f)
        print(f'{f.name} + {type(f)}')
    return files

# TODO for each file, run regex and print result
def open_search_print(files, user_regex):
    for f in files:
        reader = open(f).read()
        print(f'Searching {f}')
        print(f'{user_regex.findall(reader)}')

        # input()
    print()

file_list = find_text_files()
print()
compiled_re = get_regex()
open_search_print(file_list, compiled_re)
