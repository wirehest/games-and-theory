
#print('Input list:')
spam = ['apples', 'bananas', 'tofu', 'cats']

def func_unpack(input_list):
    if len(input_list) == 0:
        print('List is empty')
    elif len(input_list) == 1:
        print(input_list[0])
    else:
        for x in input_list[:-1]:
            print(x + ', ', end = '')
        print('and ' + input_list[-1])

func_unpack(spam)
