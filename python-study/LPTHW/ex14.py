from sys import argv
from datetime import datetime

script, user_name, birthyear = argv
prompt = '~ '
age = datetime.now().year - int(birthyear)

print(f"\nHi {user_name}, I'm the {script} script.")
print(f"""
I see you were born in {birthyear}.
That makes you {age} years old.
""")
print("I'd like to ask you a few questions.")
print(f"Do you like me {user_name}?")
likes = input(prompt)

print(f"Where do you live {user_name}?")
lives = input(prompt)

print("What kind of computer do you have?")
computer = input(prompt)

print(f"""
Alright, so you said {likes} about liking me.
You live in {lives}. Not sure where that is.
And you have a {computer} computer. Nice.
""")
