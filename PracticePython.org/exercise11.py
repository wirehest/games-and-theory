"""
Check Primality Functions
Exercise 11

Ask the user for a number and determine whether the number is prime or not. (For those who have forgotten, a prime number is a number that has no divisors.). You can (and should!) use your answer to Exercise 4 to help you. Take this opportunity to practice using functions, described below.
"""

numero = int(input("Input a number to check for prime-ness: "))

def prime_checker(query_number):
    if query_number == 1:
        print("1 is not prime.")

    for d in list(range(2, query_number)):
        if query_number % d == 0:
            print(f"{query_number} is not prime because of divisor {d}.")
            break

        else:
            print(f"{query_number} is prime.")
            break

prime_checker(numero)

#prime_checker(15)

#for d in range(1, 1000):
#    prime_checker(d)
