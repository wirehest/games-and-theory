import string

def word_count(sentence):
    punct_dict = {
        ",": " ",
        "_": " ",
        ".": " "
        }

    # strip punctuation, exceptions for ',', '_', and '.',
    # and convert to lowercase
    words = "".join([punct_dict.get(x, x) for x in sentence.lower()])
    words = "".join([x for x in words if x not in string.punctuation])

    words_unique = list(set(words.split()))     # deduped word list
    words_list = list(words.split())    # full word list including duplicates
    wordcounts = {}     # initialize wordcounts dictionary

    for x in words_unique:
        count = 0

        for y in words_list:
            if x == y:
                count += 1
                wordcounts[x] = count

    return wordcounts
