import random

def substitution(password):
    subs = {
        'a': '@',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '$'
    }

    password_list = list(password)

    for x in password_list:
        if x in list(subs.keys()):
            password_list[password_list.index(x)] = subs.get(x)

    print("".join(password_list))

substitution("heavieStglOvessHrimp")
