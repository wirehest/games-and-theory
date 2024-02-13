#! python3

# Text Files to Spreadsheet
# Write a program to read in the contents of several text files (you can make 
# the text files yourself) and insert those contents into a spreadsheet, with 
# one line of text per row. The lines of the first text file will be in the 
# cells of column A, the lines of the second text file will be in the cells of 
# column B, and so on.

import logging
import openpyxl

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
#logging.disable(logging.CRITICAL)

"""
if len(sys.argv) != 2:
    print(f"Usage: {os.path.basename(__file__)} <absolute path to text files>")
    #print(f"E.g., {os.path.basename(__file__)} my_spreadsheet.xlsx")
    sys.exit()
"""

# Builds tuple of text files found in specified directory.
path_to_files = Path.cwd()  #sys.argv[1]
text_files = tuple(path_to_files.glob('*.txt'))


# Creates workbook.
wb = openpyxl.Workbook()
sheet = wb.active
column_counter = 1

# Lists files found.
print("Text files found in specified directory:")
for text_file in text_files:
    print(text_file.name, end=' ')

input("\nPress any key to continue...")

# Writes to spreadsheet.
for text_file in text_files:
    open_file = open(text_file, 'r')
    row_counter = 1

    for row in open_file.readlines():
        sheet.cell(row=row_counter, column=column_counter, value=row)
        row_counter += 1

    column_counter += 1

# Saves workbook.
wb.save('text_to_spreadsheet.xlsx')