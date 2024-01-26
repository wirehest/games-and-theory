# mad-libs.py: Reads in text files and lets the user add their own text anywhere the word ADJECTIVE, NOUN, ADVERB, or VERB appears in the text file.

import re
from pathlib import Path

teststr = 'The ADJECTIVE panda walked to the NOUN and then VERB. A nearby NOUN was unaffected by these events.'

# Read and select text files.
cwdtxts = list(Path.cwd().glob('*.txt'))
print('Text files found in the current working directory:')

for f in cwdtxts:     # Lists .txt files in cwd.
    print(f)

while True:
    targetfile = input('Specify the .txt file to open (use madlibs.txt):\n')
    # TODO error detection for invalid file
    break

srctxt = open(Path.cwd() / f'{targetfile}').read()
print('\033c\033[3J', end='') # Clears screen.

# Split and replace.
srctxt_list = srctxt.split()
madtxt_list = []
repl_list = ('ADJECTIVE', 'VERB', 'ADVERB', 'NOUN')
# TODO modify replacement list with regex for parentheticals so that
# detailed instructions can be provided.

for i in range(len(srctxt_list)):
    for t in repl_list:
        if re.compile(t).search(srctxt_list[i]) != None:
            w = t
            break
        else:
            w = None

    if w in repl_list:
        prefix_char = ''
        suffix_char = ''
        replcmnt_word = ''
        article = 'an' if t[0] == 'A' else 'a'
        replcmnt_word = input(f'Enter {article} {w}:\n')

        replaced = re.compile(w).sub(replcmnt_word, srctxt_list[i])
        madtxt_list.append(replaced)

    else:
        madtxt_list.append(srctxt_list[i])

madtxt_str = ' '.join(madtxt_list)
print(f'Your madlib:\n{madtxt_str}')

# Save as text file.
savename = input(f'Provide a save name (extension not needed):\n')
savefile = open(f'{savename}.txt', 'w')
savefile.write(madtxt_str)

