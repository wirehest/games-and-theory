import re

def check_criteria(pws):
    rx_upper = re.compile(r'[A-Z]+')
    rx_lower = re.compile(r'[a-z]+')
    rx_digit = re.compile(r'\d+')
    rx_len = re.compile(r'[A-Za-z\d]{8,}')
    err_track = 0

    if len(rx_upper.findall(pws)) == 0:
        print('Need at least one upper case character.')
        err_track += 1
    if len(rx_lower.findall(pws)) == 0:
        print('Need at least one lower case character.')
        err_track += 1
    if len(rx_digit.findall(pws)) == 0:
        print('Need at least one digit.')
        err_track += 1
    if len(rx_digit.findall(pws)) == 0:
        print('Need at least eight characters.')
        err_track += 1
    if err_track == 0:
        print('Password is valid.')
    return err_track

while True:
    password = input('Input password to check: ')
    errors = check_criteria(password)

