import re


def top_3_words(text):
    """Returns array of the top-3 occurring words in the input text."""
    pattern = re.compile("'*[A-Za-z]+'*[A-Za-z]+'*|[A-Za-z]+")
    matches = pattern.findall(text.lower())

    counts = dict((key, matches.count(key)) for key in set(matches))
    counts = sorted(counts, key=lambda x: counts[x], reverse=True)

    return counts[:min(3, len(counts))]