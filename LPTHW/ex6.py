# declares variable types_of_people with value 10
types_of_people = 10

# declares format string that formats with variable above
x = f"There are {types_of_people} types of people."

# declares variable "binary"
binary = "binary"

# declares variable "do_not"
do_not = "don't"

# declares format string and formats with the two variables above
y = f"Those who know {binary} and those who {do_not}." # string-in-string

# the following two lines print the format strings declared above
print(x)
print(y)

# the following lines print format strings that were not declared
print(f"I said: {x}") # string-in-string
print(f"I also said: '{y}'") # string-in-string

# variable hilarious set to False
hilarious = False

# declares string, but not formatted
joke_evaluation = "Isn't that joke so funny?! {}"

# formats string above with hilarious variable
print(joke_evaluation.format(hilarious))

# declares more strings
w = "This is the left side of..."
e = "a string with a right side."

# concatenates the strings above
print(w + e) # string-in-string
