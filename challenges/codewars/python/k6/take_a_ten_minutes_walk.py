def is_valid_walk(walk):
    """Checks whether a random walk of length 10 returns to origin."""
    directions = {'n': (0 + 1j), 'e': (1 + 0j), 's': (0 - 1j), 'w': (-1 + 0j)}
    position = sum(directions[d] for d in walk)
    
    return True if (len(walk) == 10) and (position == 0j) else False

