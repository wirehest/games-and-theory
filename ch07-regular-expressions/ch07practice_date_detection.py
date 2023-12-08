import re

raw_dates = '28/02/2023 29/02/2023 29/02/2024 31/02/2099 39/19/1500 15/05/0999 15/05/3500'

date_detection = re.compile(r'([0-3]\d)/([01]\d)/([12]\d{3})')

# filters raw date string using regex
regex_passed = date_detection.findall(raw_dates)
final_date_list = []

# is leap year True/False
def leap_year(year):
    year = int(year)
    if (year % 4 == 0) and (year % 100 != 0):
        return True
    elif (year % 4 == 0) and (year % 400 == 0):
        return True
    else:
        return False

# verify month
def verify_month(i, date_string):
    if int(date_string[i][1]) > 12:
        # print(f'{date_string[i][1]} is not a valid month.')
        return False
    else:
        return True

# verify day
def verify_day(i, date_string):
    if int(date_string[i][1]) in [1, 3, 5, 7, 8, 10, 12] and int(date_string[i][0]) <= 31:
        return True
    elif int(date_string[i][1]) in [4, 6, 9, 11] and int(date_string[i][0]) <= 30:
        return True
    elif int(date_string[i][1]) == 2:
        if int(date_string[i][0]) == 29 and leap_year(date_string[i][2]):
            # print(f'{int(date_string[i][0]) == 29} {leap_year(date_string[i][2])}')
            return True
        elif int(date_string[i][0]) <= 28:
            return True
        else:
            return False
    else:
        return False

# verify year
def verify_year(i, date_string):
    if 1_000 > int(date_string[i][2]) > 2_999:
        # print(f'{date_string[i][2]} is not a valid year.')
        return False
    else:
        return True

# runs all verify functions
def run_verifications(date_string):
    valid_dates = []
    for i in range(len(date_string)):
        if verify_day(i, regex_passed) * verify_month(i, regex_passed) * verify_year(i, regex_passed) == True:
            valid_dates.append(date_string[i])
        else:
            continue
    return valid_dates


print(f'original list: {raw_dates}')
print('regex-filtered: ', end='')
for i in range(len(regex_passed)):
    print(f'{regex_passed[i][0]}/{regex_passed[i][1]}/{regex_passed[i][2]}', end=' ')
print(f'\nfinal date list: ', end='')
for i in range(len(run_verifications(regex_passed))):
    print(f'{run_verifications(regex_passed)[i][0]}/{run_verifications(regex_passed)[i][1]}/{run_verifications(regex_passed)[i][2]}', end=' ')
print('\n')
