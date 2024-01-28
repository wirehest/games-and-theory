def find_it(seq):
    """Returns the integer that appears an odd number of times in the
    input.
    """
    for e in set(seq):
        if seq.count(e) % 2 == 0:
            continue
        else:
            return e
