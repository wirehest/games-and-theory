def remove_smallest(numbers):
    """Removes the smallest value from a list without changing the
    original list.
    """
    n = numbers.copy()
    try:
        n.remove(min(n))
    except ValueError:
        return []

    return n


assert remove_smallest([1,2,3,4,5]) == [2,3,4,5]
assert remove_smallest([5,3,2,1,4]) == [5,3,2,4]
assert remove_smallest([2,2,1,2,1]) == [2,2,2,1]