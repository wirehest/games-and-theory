"""
Write a program that finds all files with a given prefix, such as spam001.txt, spam002.txt, and so on, in a single folder and locates any gaps in the numbering (such as if there is a spam001.txt and spam003.txt but no spam002.txt). Have the program rename all the later files to close this gap.

As an added challenge, write another program that can insert gaps into numbered files so that a new file can be added.
"""

import logging
import re

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(logging.CRITICAL)

raw_ext = 'dummy'

# Get prefix and folder.
def get_usrvars():
    v_ext = raw_ext + '*' # input('Specify file prefix:\n') + '*'
    v_dir = Path('/home/rubaboo/PyProjects/selective_copy_files') # Path(input('Provide absolute path to target directory:\n'))

    #logging.info(f'v_ext: {v_ext}')
    #logging.info(f'prefix type: {type(v_ext)}')
    #logging.info(f'v_dir: {v_dir}')
    #logging.info(f'folder type: {type(v_dir)}')
    return v_ext, v_dir

# Finds files in folder with the prefix.
def get_filelist(f_usrvars):
    prefix, folder = f_usrvars

    logging.info(prefix)

    filelist = list(folder.glob(prefix))
    filelist.sort()

    logging.info(f'filelist: {filelist}')
    logging.info(f'len(filelist): {len(filelist)}')

    return filelist

# Regex to find mismatch between numbering and filecount count.
def find_mismatch(files):
    re_digits = re.compile(r'\d')
    renamelist = []

    for f in files:
        renamelist.append([f.parent, f.stem, f.suffix, re_digits.search(str(f)).group()])

    renamelist.sort(key=lambda f : f[3])    # Sorts renamelist in order.
    logging.info(f'renamelist (pre-modification): {renamelist}')

    for i in range(len(renamelist)):
        logging.info(f'{renamelist[i][3]}, {i + 1}')
        if int(renamelist[i][3]) != i + 1:
            renamelist[i] = renamelist[i][0] / (raw_ext + str(i + 1) + renamelist[i][2])
        else:
            renamelist[i] = renamelist[i][0] / (renamelist[i][1] + renamelist[i][2])
    logging.info(f'renamelist (post-modification): {renamelist}')
    return renamelist

def rename(source_list, rename_list):
    for i in range(len(source_list)):
        if source_list[i] != rename_list[i]:
            print(f'renaming   {source_list[i]}')
            print(f'to         {rename_list[i]}')
            # shutil.copy(source_list[i], rename_list[i])
        else:
            print(f'no change  {source_list[i]}')

def option_selector():
    print('1: Renumber files\n2: Add gap\n\nEnter an option (1 or 2):')
    while True:
        option = input()
        if option in ('1', '2'):
            break
        else:
            print('Enter 1 or 2.')
            continue

    if option == '1':

# print(get_usrvars())
        files_found = get_filelist(get_usrvars())
        logging.info(f'files_found type: {type(files_found)}')
        logging.info(f'files_found contents: {files_found}')
        files_to_rename = find_mismatch(files_found)
        rename(files_found, files_to_rename)

    else:
        pass

option_selector()
