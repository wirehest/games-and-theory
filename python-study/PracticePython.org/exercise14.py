""" Exercise 14

Write a program (function!) that takes a list and returns a new list that contains all the elements of the first list minus all the duplicates.
Extras:
Write two different functions to do this - one using a loop and constructing a list, and another using sets.
Go back and do Exercise 5 using sets, and write the solution for that in a different function.
"""

a = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9]

def nix_dupe_by_loop(input_list):
    deduped = []
    for x in input_list:
        if x not in deduped:
            deduped.append(x)

    return deduped

def nixdupeloop_listcomp(input_list):
    deduped = []

    # not recommended because using LC only for side effect
    [deduped.append(x) for x in input_list if x not in deduped]
    return deduped

def nix_dupe_by_set(input_list):
    return list(set(input_list))

print(f"Initial list:\n{a}\n")

print(f"Deduped via loop + list construction:\n{nix_dupe_by_loop(a)}\n")

print(f"Via list comprehension:\n{nixdupeloop_listcomp(a)}\n")

print(f"Deduped via sets:\n{nix_dupe_by_set(a)}")
