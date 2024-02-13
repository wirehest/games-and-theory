a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = []
cutoff = int(input("Give me a cutoff number: "))

for i in a:
    if i < cutoff:
        b.append(i)

print(b)
