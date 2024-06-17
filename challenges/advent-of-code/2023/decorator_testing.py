#! python3


"""Decorator testing."""


def f_inner():
    return "With love, from f_inner."


def f_decorator1(func):
    def f_wrapper1():
        print("before inner-function call.")
        print(func())
        print("after inner-function call.")
    return f_wrapper1


print(f_decorator1(f_inner))