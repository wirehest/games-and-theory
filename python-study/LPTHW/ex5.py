name = 'Lawrence Ogawa'
age = 31
height_cm = 170 # centimeters
height_inches = height_cm / 2.54
weight_lbs = 165 # lbs
weight_kilo = weight_lbs / 2.20462
eyes = 'Brown'
teeth = 'White'
hair = 'Black'

print(f"Let's talk about {name}.")
print(f"He's {height_cm} centimeters tall. ({height_inches} in inches.)")
print(f"He's {weight_lbs} pounds heavy. ({weight_kilo} in kilos.)")
print("Actually, that's not too heavy.")
print(f"He's got {eyes} eyes and {hair} hair.")
print(f"His teeth are usually {teeth}, depending on the coffee.")

total = age + height_cm + weight_lbs
print(f"If I add {age}, {height_cm}, and {weight_lbs} I get {total}.")
