def better_than_average(c, y):
    """Returns True if your test score (y) is better than average."""
    class_size = len(c) + 1
    return True if y > sum(c, y) / class_size else False