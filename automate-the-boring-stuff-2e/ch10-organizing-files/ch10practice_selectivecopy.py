"""
Selective Copy
Write a program that walks through a folder tree and searches for files with a certain file extension (such as .pdf or .jpg). Copy these files from whatever location they are in to a new folder.
"""

import logging
import shutil
import os
import re

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
# logging.disable(logging.CRITICAL)

# target_dir = Path.home() / 'Desktop/temp-attachment-file-dump/keep-illustrations'

# Clears the screen.
def clear():
    print('\033c\033[3J', end='')

# Gets variables from user.
def get_usr_vars():
    # Test Variables Only
    # usr_ext = 'txt'
    # src_dir = '/home/rubaboo/PyProjects/selective_copy_files'
    # tgt_dir = '/home/rubaboo/PyProjects/selective_copy_tgt'
    usr_ext = ''
    valid_ext = re.compile(r'\.[a-zA-Z\d]{2,4}$')

    while True:
        usr_ext = input('Enter a file extension (include the "."):\n')
        if valid_ext.match(usr_ext) == None:
            continue
        else:
            clear()
            break

    src_dir = input('Specify path to search:\n')
    clear()
    tgt_dir = input('Specify path where files should be copied:\n')

    return usr_ext, src_dir, tgt_dir

# Use regex to create copy destination path.
def form_target_dir(src_dir, tgt_dir, walk_dir):
    re_tgt = re.compile(r'%s' % src_dir)
    tgt_subdir = re_tgt.sub(tgt_dir, walk_dir)
    logging.info(f'tgt_subdir type: {type(tgt_subdir)}')
    return tgt_subdir

# Copy function.
def walk_n_copy(f_usrvars):
    usr_ext, src_dir, tgt_dir = f_usrvars

    Path(tgt_dir).mkdir(parents=True, exist_ok=True)
    print()

    for directory, _, filenames in os.walk(src_dir):
        tgt_subdir = form_target_dir(src_dir, tgt_dir, directory)

        for filename in filenames:
            if filename.endswith(usr_ext):
                if directory == src_dir:
                    pass
                else:
                    Path(tgt_subdir).mkdir(parents=True, exist_ok=True)
                print(f'Copying {directory}/{filename}')
                print(f'to      {tgt_subdir}')
                shutil.copy(Path(directory)/filename, tgt_subdir)

clear()
walk_n_copy(get_usr_vars())
