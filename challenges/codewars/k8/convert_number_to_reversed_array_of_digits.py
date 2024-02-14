def digitize(n):
    """Returns an integer in reverse order."""
    return [int(x) for x in str(n)[::-1]]