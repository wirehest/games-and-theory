#! python3


def is_isogram(string):
    """"""
    counts = dict.fromkeys(set(string.lower()), 0)

    for c in string.lower():
        counts[c] += 1
        if counts[c] > 1:
            return False

    return True