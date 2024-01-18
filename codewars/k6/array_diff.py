#! python3

"""
"""


def array_diff(a, b):
    """Removes elements from list a that are also in list b.
    Note: will not work if b is the 'longer' list."""
    return [x for x in a if x not in b]