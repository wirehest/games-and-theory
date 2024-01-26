import string

def hey(phrase):
    phrase = phrase.strip()
    nopunc = "".join([x for x in phrase if x not in string.punctuation])

    if len(phrase) == 0:
        return "Fine. Be that way!"

    elif nopunc.isupper() is True:
        return "Whoa, chill out!"

    elif phrase[-1] == "?":
        return "Sure."

    else:
        return "Whatever."
