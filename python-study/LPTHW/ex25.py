def break_words(stuff):
    """This function will break up words for us."""
    words = stuff.split(' ')
    # split is reverse concatenate; split(delimeter, max_splits)
    return words

def sort_words(words):
    """Sorts the words."""
    return sorted(words)
    # sorted sorts elements of a list; sorted(list, key, reverse)
    # key is function called upon each element before sorting
    # can use list.sort() method, modifies existing list

def print_first_word(words):
    """Prints the first word after popping it off."""
    word = words.pop(0)
    # pop removes item at index position specified
    # if no index specified, removed item in last position
    print(word)

def print_last_word(words):
    """Prints the last word after popping it off."""
    word = words.pop(-1)
    # see pop, above
    print(word)



def sort_sentence(sentence):
    """Takes in a full sentence and returns the sorted words."""
    words = break_words(sentence)
    return sort_words(words)

def print_first_and_last(sentence):
    words = break_words(sentence)
    print_first_word(words)
    print_last_word(words)

def print_first_and_last_sorted(sentence):
    """Sorts the words then prints the first and last one."""
    words = sort_sentence(sentence)
    print_first_word(words)
    print_last_word(words)
