#! python3
# phone-and-email.py - Finds phone numbers and email addresses.
# not using pyperclip because it doesn't work

import pyperclip, re

phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?              # area code
    (\s|-|\.)?                      # separator
    (\d{3})                         # first three digits
    (\s|-|\.)?                      # separator
    (\d{4})                         # last four digits
    (\s*(ext|x|ext.)\s*(\d{2,5}))?  # extension
    )''', re.VERBOSE)

# email regex

email_regex = re.compile(r'''(
    [a-zA-Z0-9._%+-]+           # username
    @                           # @ symbol
    [a-zA-Z0-9.-]+              # domain name
    (\.[a-z-A-Z]{2,4})          # dot-something
    )''', re.VERBOSE)

# find matches in sample string

text = """
Reach Us by Email - email is the best way to reach us
Help with your order: support@nostarch.com
Academic requests: academic@nostarch.com (Further information)
Bulk and special sales questions: sales@nostarch.com
Conference and event inquiries: conferences@nostarch.com
Errata - please send any errata reports to: errata@nostarch.com
General inquiries: info@nostarch.com
Media requests: media@nostarch.com
Proposals or editorial inquiries: editors@nostarch.com
Rights inquiries: rights@nostarch.com
Reach Us by Mail
Our Mailing Address

No Starch Press
329 Primrose Road,  #42
Burlingame, CA 94010-4093
USA

Our Physical Address

No Starch Press, Inc.
245 8th Street
San Francisco, CA 94103
USA

NOTE: Below are our business phone numbers but we are a completely remote company. Please email support@nostarch.com with your questions and we will do our best to promptly resolve any issues that you may have.

Phone: 800.420.7240 or +1 415.863.9900
Fax: +1 415.863.9950

Reach Us on Social Media
Twitter Facebook Instagram Linkedin Pinterest
"""

matches = []

for groups in phone_regex.findall(text):
    phone_num = '-'.join([groups[1], groups[3], groups[5]])
    if groups[8] != '':
        phone_num += ' x' + groups[8]
    matches.append(phone_num)

for groups in email_regex.findall(text):
    matches.append(groups[0])

# prints results

if len(matches) > 0:
    print(f'Input string: {text}')
    print('\n'.join(matches))
else:
    print('No phone numbers or email addresses found.')

