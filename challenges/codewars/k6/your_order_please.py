def order(sentence):
    """Sorts a sentence using numbers embedded in each word."""

    ordered_sentence = [None] * len(sentence.split())
    for word in sentence.split():
        for char in word:
            if char.isnumeric():
                ordered_sentence[int(char) - 1] = word
    
    return ' '.join(ordered_sentence)


assert order('is2 Thi1s T4est 3a') == 'Thi1s is2 3a T4est'