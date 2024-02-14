import math


def luck_check(st):
    """Checks whether the sums of both halves of a string equal each
    other. Odd-length strings have the middle digit disregarded.
    """
    notIntegers = not math.prod([x.isdigit() for x in st])

    if len(st) == 0 or notIntegers:
        raise Exception
    
    if len(st) % 2:
        print(bool(len(st) % 2))
        st = st[0 : math.floor(len(st)/2)] + st[math.ceil(len(st)/2) :]

    leftSum = sum([int(x) for x in st[0 : int(len(st)/2)]])
    fullSum = sum([int(x) for x in st])

    return True if leftSum == (fullSum / 2) else False 