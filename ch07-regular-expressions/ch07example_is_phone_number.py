message = 'Call me at 415-555-1011 tomorrow. 415-555-9999 is my office.'

for i in range(len(message)):
    chunk = message[i:i+12]
    print(chunk)
    # if is_phone_number(chunk):
    #     print('Phone number found: ' + chunk)
print('Done')
