def test():
    return 1, 2, 3, 4

a = test()

print("{} {} {}".format(*a))
