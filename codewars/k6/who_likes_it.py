def likes(names):
    """Returns formatted string based on input string length."""
    count = len(names)
    
    match count:
        case 0:
            return "no one likes this"
        case 1:
            return "%s likes this" % tuple(names)
        case 2:
            return "%s and %s like this" % tuple(names)
        case 3:
            return "%s, %s and %s like this" % tuple(names)
        case _ if count >= 4:
            response_tuple = (names[0], names[1], str(len(names)-2))
            return "%s, %s and %s others like this" % response_tuple
        case _:
            return


assert likes([]) == 'no one likes this'
assert likes(['Peter']) == 'Peter likes this'
assert likes(['Jacob', 'Alex']) == 'Jacob and Alex like this'
assert likes(['Max', 'John', 'Mark']) == 'Max, John and Mark like this'
assert likes(['Alex', 'Jacob', 'Mark', 'Max'])\
    == 'Alex, Jacob and 2 others like this'