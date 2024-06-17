import plotly.express as px

from die import Die

# Create dice.
die_1, die_2 = Die(), Die(10)

# Make rolls and store in list.
results = []
for i in range(10_000):
    results.append(die_1.roll() + die_2.roll())

# Analyze.
frequencies = []
poss_results = range(2, die_1.num_sides + die_2.num_sides + 1)
for v in poss_results:
    frequency = results.count(v)
    frequencies.append(frequency)

# Plotly.
title = "D6 & D10 dice roll results."
labels = {'x': 'Result', 'y': 'Frequency'}
fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels,
    template='plotly_dark')

# Further customize chart.
fig.update_layout(xaxis_dtick=1)

fig.show()

#fig.write_html('dice_visual_d6d10.xhtml')
# This didn't work. Returned an XML parsing error.
