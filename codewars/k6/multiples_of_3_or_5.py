def solution(number):
    """Returns sum of numbers divisible by 3 or 5 less than or equal to
    input number."""
    return sum([x for x in range(number) if (x % 3 == 0) or (x % 5 == 0)])