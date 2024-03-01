def find_nb(m):
    """"""
    tally, n = 0, 0

    def cube_vol(n):
        return n ** 3

    while tally < m:
        n += 1
        tally += n ** 3

    return n if tally == m else -1

assert find_nb(1071225) == 45
assert find_nb(91716553919377) == -1