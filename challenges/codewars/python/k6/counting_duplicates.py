#! python3

"""duplicate_count.py
Count the number of Duplicates
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits that occur 
more than once in the input string. The input string can be assumed to 
contain only alphabets (both uppercase and lowercase) and numeric 
digits.
"""


def duplicate_count(text):
    """Counts distinct case-insensitive alphanumerics occurring more 
    than once in input string.
    """
    counts = dict.fromkeys(set(text.lower()), 0)
    for c in text.lower():
        counts[c] += 1
    
    return sum([1 for v in counts.values() if v > 1])