
table_data = [['apples', 'oranges', 'cherries', 'banana'],
             ['Alice', 'Bob', 'Carol', 'David'],
             ['dogs', 'cats', 'moose', 'goose']]

def print_table(data):
    col_width = [0] * len(data)
    for i in range(len(col_width)):
        for word in table_data[i]:
            if col_width[i] < len(word):
                col_width[i] = len(word)

    for w in range(len(data[i])):
        for i in range(len(data)):
            print(table_data[i][w].rjust(col_width[i]) + ' ', end='')
        print('')

print_table(table_data)

# print('a + newline\n...')
# print('a + another print')
# print('...')
