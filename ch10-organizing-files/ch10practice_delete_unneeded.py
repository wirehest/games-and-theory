"""
Write a program that walks through a folder tree and searches for exceptionally large files or folders—say, ones that have a file size of more than 100MB. (Remember that to get a file’s size, you can use os.path.getsize() from the os module.) Print these files with their absolute path to the screen.
"""

import logging
import os

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(level=logging.CRITICAL)

path = ''
file_max = 1_000_000 # 100_000_000  # Set filesize threshold 100MB.
files_found = []

# Clears the screen.
def clear():
    print('\033c\033[3J', end='')

clear()
while True:
    try:
        # path = Path('/home/rubaboo/PyProjects')
        path = Path(input('Provide path to scan:\n'))
        if path.exists():
            break
    except KeyboardInterrupt:
        break
    except:
        continue

for folder, _, filenames in os.walk(path):
    for filename in filenames:
        file_size = os.path.getsize(Path(folder) / filename)
        if file_size >= file_max:
            files_found.append([file_size, f'{folder}/{filename}'])
        else:
            continue

logging.debug(f'files_found: {files_found}')

files_found.sort(key=lambda f : f[0], reverse=True)

clear()
print(f'Files larger than {file_max / 1_000_000} MB\nFound in {path}:\n')
for size, name in files_found:
    size_formatted = f'{round(size / 1_000_000, 1):,} MB'
    print(f'{size_formatted.ljust(15)} - {name}')
