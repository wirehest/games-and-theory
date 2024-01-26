"""
Write a function that takes a string and does the same thing as the strip() string method. If no other arguments are passed other than the string to strip, then whitespace characters will be removed from the beginning and end of the string. Otherwise, the characters specified in the second argument to the function will be removed from the string.
"""

import re

user_string = ''
sub_string = ''
# stripping function
def regex_strip(raw_str):
    rx_strip = re.compile(r'\S.*\S')
    stripped_str = rx_strip.findall(raw_str)
    return stripped_str[0]

# substitution function
def regex_subst(raw_str, sub_str):
    rx_subst = re.compile(f'[{sub_str}]*')
    subst_str = rx_subst.sub('', raw_str)
    return subst_str


while True:
    user_string = input('Input string to search.\n> ')
    sub_string = input('\nInput characters to remove.\nIf left blank, script will remove leading and trailing whitespace only.\n> ')

    if len(sub_string) == 0:
        print(f'Your string with whitespace removed:\n{regex_strip(user_string)}')

    else:
        print(f'Your string with specified characters removed:\n{regex_subst(user_string, sub_string)}')

    break


