# English to Pig Latin
print("Enter message to translate into Pig Latin:")
message = input()

VOWELS = ("a", "e", "i", "o", "u", "y")

pig_latin = []      # List of words in Pig Latin
for word in message.split():
    # Separate non-letters at start of the word:
    prefix_non_letters = ""
    while len(word) > 0 and not word[0].isalpha():
        prefix_non_letters += word[0]
        word = word[1:]
    if len(word) == 0:
        pig_latin.append(prefix_non_letters)
        continue

    # Separate non-letters at end of this word:
    suffix_non_letters = ""
    while not word[-1].isalpha():
        suffix_non_letters = word[-1] + suffix_non_letters
        word = word[:-1]

    # Remember if word was upper or title case.
    was_upper = word.isupper()
    was_title = word.istitle()

    word = word.lower()     # Make word lowercase for translation.

    # Separate consonants at start of the word:
    prefix_consonants = ""
    while len(word) > 0 and not word[0] in VOWELS:
        prefix_consonants += word[0]
        word = word[1:]

    # Add Pig Latin ending to the word:
    if prefix_consonants != "":
        word += prefix_consonants + 'ay'
    else:
        word += 'yay'

    # Set word back to uppercase or title case
    if was_upper:
        word = word.upper()
    if was_title:
        word = word.title()

    # Add non-letters back to start or e nd of the word.
    pig_latin.append(prefix_non_letters + word + suffix_non_letters)

# Join all the words back into a string:
print(" ".join(pig_latin))
