def digital_root(n):
    """Sums individual digits in a number recursively until a single
    digit is produced."""

    while len(str(n)) > 1:
        n = sum([int(x) for x in str(n)])

    return n

assert digital_root(16) == 7
assert digital_root(942) == 6
assert digital_root(132189) == 6
assert digital_root(493193) == 2