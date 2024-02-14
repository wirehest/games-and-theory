#!/usr/bin/env python3


def narcissistic(value):
    """Checks if value is a Narcissistic Number (Armstrong Number): 
    a positive number which is the sum of its own digits, each 
    raised to the power of the number of digits
    """
    armstrong = sum([int(d) ** len(str(value)) for d in str(value)])
    result = True if value == armstrong else False

    return result