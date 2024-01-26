def distance(first, second):

    hamdist = 0
    zipped = zip(first, second)

    if len(first) != len(second):
        raise ValueError

    for (x, y) in zipped:
       if x != y:
           hamdist += 1

    return hamdist
