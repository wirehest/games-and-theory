import plotly.express as px

from die import Die

# Create D6.
die = Die()

# Make rolls and store in list.
results = []
for i in range(1000):
    results.append(die.roll())

# Analyze.
frequencies = []
poss_results = range(1, die.num_sides+1)
for v in poss_results:
    frequency = results.count(v)
    frequencies.append(frequency)

# Plotly.
title = "D6 dice roll results."
labels = {'x': 'Result', 'y': 'Frequency'}

fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels)
fig.show()

