def is_pangram(s):
    """Determines whether a string is a pangram, i.e., all the letters
    of the alphabet are used at least once."""
    
    unique_chars = len(set(c for c in s.lower() if c.isalpha())) 
    return True if unique_chars == 26 else False