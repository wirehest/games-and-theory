""" Exercise 16

Write a password generator in Python. Be creative with how you generate passwords - strong passwords have a mix of lowercase letters, uppercase letters, numbers, and symbols. The passwords should be random, generating a new password every time the user asks for a new password. Include your run-time code in a main method.
Extra:
Ask the user how strong they want their password to be. For weak passwords, pick a word or two from a list.
"""

import random

class Password(object):

    def __init__(self):
        pass

    def create_pass(self):
        raw_password = None
        print("Pick a password strength: 1, 2, or 3 (increasing strength)")

        while True:
            try:
                level = int(input("> "))

                if level == 1:
                    raw_password = Gen().random_words(2)

                elif level == 2:
                    raw_password = Gen().case(Gen().random_words(3))

                elif level == 3:
                    raw_password = Gen().substitution(Gen().case(Gen().random_words(3)))

                print(f"Your new password is: {''.join(raw_password)}")
                break

            except TypeError:
                print("Input 1, 2, or 3.")

class Gen(object):

        def __init__(self):
            pass

        def random_words(self, base_word_count):
            word_list = ["evaluate", "heaviest", "approaching",
                         "swindler", "gloves", "shrimp"]
            password_list = []
            count = 0

            while count < base_word_count:
                random_index = random.randint(0, len(word_list) - 1)
                random_word = word_list[random_index]
                password_list.append(random_word)
                word_list.pop(random_index)
                count += 1

            return password_list

        def case(self, words):
            password_list = words

            for word in password_list:
                word_index = password_list.index(word)
                upper_or_lower = random.randint(0, 1)
                letter_position = random.randint(0, len(word) - 1)
                actual_word = ""
                actual_word = list(word)
                modified = list(word)[letter_position].upper()
                actual_word[letter_position] = modified
                password_list[word_index] = "".join(actual_word)

            return password_list

        def substitution(self, words):
            password_list = list(''.join(list(words)))
            subs = {
                'a': '@',
                'e': '3',
                'i': '1',
                'o': '0',
                's': '$'
            }

            for letter in password_list:
                if letter in list(subs.keys()):
                    password_list[password_list.index(letter)] = subs.get(letter)
            return password_list

new_pass = Password()
new_pass.create_pass()
