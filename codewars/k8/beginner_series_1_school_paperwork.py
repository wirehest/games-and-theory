def paperwork(n, m):
    """Calculates how many blank pages will be needed to make copies 
    of a document with 'm' pages, for 'n' classmates.
    Returns 0 if negative arguments are entered.
    """
    return n * m if (n > 0 and m > 0) else 0