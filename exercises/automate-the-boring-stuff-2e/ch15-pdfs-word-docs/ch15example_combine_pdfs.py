#! python3

# ch15practice_combine_pdfs.py
# Combines all PDFs in CWD into a single PDF.

import PyPDF2

from pathlib import Path

# Gets all files in CWD, then filters to .PDFs (case-sensitive).
cwd_files = list(Path.cwd().glob('*'))
pdf_files = [x for x in cwd_files if str(x).lower().endswith('.pdf')]

pdf_files.sort()

pdf_writer = PyPDF2.PdfFileWriter()

# Loop through all PDFs.
for filename in pdf_files:
    pdf_file_obj = open(filename, 'rb')
    pdf_reader = PyPDF2.PdfFileReader(pdf_file_obj)

    # Loop through all pages (except the first, cover page) and add.
    for page_num in range(1, pdf_reader.numPages):
        page_obj = pdf_reader.getPage(page_num)
        pdf_writer.addPage(page_obj)
        
# Save result.
pdf_output = open('allminutes.pdf', 'wb')
pdf_writer.write(pdf_output)
pdf_output.close()