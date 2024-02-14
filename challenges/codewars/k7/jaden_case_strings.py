import string as s


def to_jaden_case(string):
    """Applies title case to each word in the input string. Uses
    capwords from the string module, which accounts for apostrophes.
    """
    return s.capwords(string)