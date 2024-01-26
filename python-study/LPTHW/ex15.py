# imports argv function from sys library
from sys import argv

# passes arguments from script call into script and filename
script, filename = argv

# variable txt corresponds to the opened file specified at script-run
txt = open(filename)

# formatted string that also refers to the filename
print(f"Here's your file {filename}:")

# spits out contents of txt variable using read function
print(txt.read())
txt.close()

print("Type the filename again:")

# asks for file input again
file_again = input("> ")

# spits out file
txt_again = open(file_again)

print(txt_again.read())
txt_again.close()
