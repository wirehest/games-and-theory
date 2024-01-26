#! python3
# rename-dates.py - Renames filenames with American MM-DD-YYYY date format
# to European DD-MM-YYY.

import shutil
import os
import re

date_pattern = re.compile(r"""^(.*?)        # all text before the date
    ((0|1)?\d)-         # one or two digits for the month
    ((0|1|2|3)?\d)-     # one or two digits for the day
    ((19|20)\d{2})      # four digits for the year
    (.*?)$              # all text after the date
    """, re.VERBOSE)

# Loop over files in working dir
for amerfilename in os.listdir('.'):
    matchobj = datepattern.search(amerfilename)

    # Skip files without a date.
    if mo == None:
        continue

    # Get different parts of filename
    beforedate = mo.group(1)
    monthpart  = mo.group(2)
    daypart    = mo.group(4)
    yearpart   = mo.group(6)
    afterpart  = mo.group(8)

    # Form Euro filename
    eurofilename = beforepart + daypart + '-' + monthpart + '-' + yearpart + afterpart

    # Get full absolute paths
    absworkingdir = os.path.abspath('.')
    amerfilename = os.path.join(absworkingdir, amerfilename)
    eurofilename = os.path.join(absworkingdir, eurofilename)

    # TODO: rename files
    print(f'Renaming "{amerfilename}" to "{eurofilename}"...')
    #shutil.move(amerfilename, eurofilename)        # uncomment after testing
