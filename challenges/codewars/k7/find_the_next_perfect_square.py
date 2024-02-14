import math


def find_next_square(sq):
    """Finds the next 'integral perfect square' after the one passed as 
    a parameter. An integral perfect square is an integer n such that 
    sqrt(n) is also an integer. If the parameter is not a perfect 
    square, returns -1.
    """
    sq_root = math.sqrt(sq)
    return (sq_root+1) ** 2 if math.sqrt(sq).is_integer() else -1
