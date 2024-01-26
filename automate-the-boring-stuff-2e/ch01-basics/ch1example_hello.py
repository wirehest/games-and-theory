from random import *
for i in range(5):
    print(randint(1, 10))
"""
tot = 0
i = 0
while i < 101:
    tot = tot + i
    i = i + 1
print(tot)
"""
"""
tot = 0
for num in range(101):
    tot = tot + num
print(tot)
"""
"""
while True:
    print('Who are you?')
    name = input()
    if name != 'Joe':
        continue
    print('Hello, Joe. Password?')
    password = input()
    if password == 'swordfish':
        break

print('Access granted.')
"""

"""
# x = ''
while True: # x != 'your name':
    print('Please type your name.')
    x = input()
    if x == 'your name':
        break
print('Thank you!')
"""
"""
spam = 0
while spam < 5:
    print('Hello, world.')
    spam = spam + 1
    # print(spam)
"""
"""
name = 'Mary'
password = 'swordfish'
if name == 'Mary':
    print('Hello, Mary.')
    if password == 'swordfish':
        print('Access granted.')
    else:
        print('Wrong password.')
"""

"""
print('Hello.')
print('Name?')
my_name = input()
print('Good to meet you,' + my_name)
print('Name length: ' + str(len(my_name)))
print('How old are you?')
my_age = input()
print('You will be ' + str(int(my_age) + 1) + ' in a year.')
"""
