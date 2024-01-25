#! python3

# Blank Row Inserter
# Create a program blankRowInserter.py that takes two integers and a filename 
# string as command line arguments. Let’s call the first integer N and the 
# second integer M. Starting at row N, the program should insert M blank rows 
# into the spreadsheet.

import logging
import openpyxl
import sys
import os

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
#logging.disable(logging.CRITICAL)

# Enforce variable input from commandline.
if len(sys.argv) != 4:
    print(f"Usage: {os.path.basename(__file__)} <insertion row#> <# of rows to insert> <filename to modify>")
    print(f"E.g., {os.path.basename(__file__)} 3 2 myProduce.xlsx")
    sys.exit()

# Assign variables.
insert_at_row = int(sys.argv[1])
additional_rows = int(sys.argv[2])
target_file = sys.argv[3] 

wb = openpyxl.load_workbook(f'{target_file}')          # Load workbook.
sheet = wb.active           # Set active sheet.
sheet.insert_rows(insert_at_row, amount=additional_rows)

print(f"Inserted {additional_rows} rows at row {insert_at_row}.")
print(f"Saving as rows_inserted_{target_file}.")
wb.save(f'rows_inserted_{target_file}')


