import time

collatz_result = 0

def collatz(number):
    if number % 2 == 0:
        return (number // 2)
    else:
        return (3 * number + 1)

while True:
    try:
        print('Enter a positive integer')
        number_input = int(input())
        if type(number_input) == int and number_input >= 0:
            break
        else:
            continue
    except ValueError:
        continue

while True:
    print(collatz(number_input))
    if collatz(number_input) != 1:
        number_input = collatz(number_input)
        time.sleep(0.005)
    else:
        break
