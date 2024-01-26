#! python3

import matplotlib.pyplot as plt
import plotly.express as px

from die import Die
from random_walk import RandomWalk
from random_walk_refactored import RandomWalk as RaWaRefac


# 15-1. Cubes: A number raised to the third power is a cube. Plot 
# the first five cubic numbers, and then plot the first 5,000 cubic 
# numbers.
def ex15_1():
    """Create plot for cubes."""
    x_vals = range(5_000)
    y_vals = [x**3 for x in x_vals] 

    fig, ax = plt.subplots()
    ax.scatter(x_vals, y_vals)
    plt.show()


# 15-2. Colored Cubes: Apply a colormap to your cubes plot.
def ex15_2():
    """Applies cmap to cubes plot."""
    x_vals = range(5_000)
    y_vals = [x**3 for x in x_vals] 

    fig, ax = plt.subplots()
    ax.scatter(x_vals, y_vals, c=y_vals, cmap=plt.cm.RdPu)
    plt.show()


# 15-3. Molecular Motion: Modify rw_visual.py by replacing ax.scatter() 
# with ax.plot(). To simulate the path of a pollen grain on the surface 
# of a drop of water, pass in the rw.x_values and rw.y_values, and 
# include a linewidth argument. Use 5,000 instead of 50,000 points to 
# keep the plot from being too busy.
def ex15_3():
    """Simulates pollen on water."""
    rw = RandomWalk(5_000)
    rw.fill_walk()

    fig, ax = plt.subplots()
    ax.plot(rw.x_values, rw.y_values, linewidth=2)
    ax.set_aspect('equal')
    plt.show()


# 15-4. Modified Random Walks: In the RandomWalk class, x_step and 
# y_step are generated from the same set of conditions. The direction 
# is chosen randomly from the list [1, -1] and the distance from the 
# list [0, 1, 2, 3, 4]. Modify the values in these lists to see what 
# happens to the overall shape of your walks. Try a longer list of 
# choices for the distance, such as 0 through 8, or remove the −1 from 
# the x- or y-direction list.
def ex15_4():
    """Describes results of modifying distance and direction in 
    RandomWalk
    """
    ans = """Done.
    Modifying the x and y direction list will change whether the
    randomwalk can turn left/right or go up/down, respectively.
    Modifying the distance range will increase the max range
    traveled. Asymmetrics changes (e.g., max x_distance 10 vs max
    y_distance 5) will stretch the walk on that axis only.
    """
    print(ans)


# 15-5. Refactoring: The fill_walk() method is lengthy. Create a new 
# method called get_step() to determine the direction and distance for 
# each step, and then calculate the step. You should end up with two 
# calls to get_step() in fill_walk():
# x_step = self.get_step()
# y_step = self.get_step()
# This refactoring should reduce the size of fill_walk() and make the 
# method easier to read and understand.
def ex15_5():
    """Demonstrates use of refactored RandomWalk class."""
    rw = RaWaRefac(5_000)
    rw.fill_walk()
    point_numbers = range(rw.num_points)

    fig, ax = plt.subplots()
    ax.plot(rw.x_values, rw.y_values, linewidth=2)
    ax.set_aspect('equal')
    plt.show()


# 15-6. Two D8s: Create a simulation showing what happens when you roll 
# two eight-sided dice 1,000 times. Try to picture what you think the 
# visualization will look like before you run the simulation, then see 
# if your intuition was correct. Gradually increase the number of rolls 
# until you start to see the limits of your system’s capabilities.
def ex15_6():
    "Rolls two D8s."
    die_1, die_2 = Die(8), Die(8)
    poss_results = range(2, die_1.num_sides + die_2.num_sides + 1)

    results = []
    for i in range(500_000):
        results.append(die_1.roll() + die_2.roll())

    frequencies = []
    for s in poss_results:
        frequencies.append(results.count(s))

    # Plotly.
    title = f"D{die_1.num_sides} & D{die_2.num_sides} dice roll results."
    labels = {'x': 'Result', 'y': 'Frequency'}
    fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels,
        template='plotly_dark')
    fig.update_layout(xaxis_dtick=1)
    fig.show()


# 15-7. Three Dice: When you roll three D6 dice, the smallest number 
# you can roll is 3 and the largest number is 18. Create a 
# visualization that shows what happens when you roll three D6 dice.
def ex15_7():
    """Roll three D6s."""
    die_1, die_2, die_3 = Die(6), Die(6), Die(6)
    max_sum = die_1.num_sides + die_2.num_sides + die_3.num_sides
    poss_results = range(2, max_sum + 1)

    results = []
    for i in range(10_000):
        results.append(die_1.roll() + die_2.roll() + die_3.roll())

    frequencies = []
    for s in poss_results:
        frequencies.append(results.count(s))

    # Plotly.
    title = (f"D{die_1.num_sides}, D{die_2.num_sides}, D{die_2.num_sides}"
         " dice roll results.")
    labels = {'x': 'Result', 'y': 'Frequency'}
    fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels,
        template='plotly_dark')
    fig.update_layout(xaxis_dtick=1)
    fig.show()


# 15-8. Multiplication: When you roll two dice, you usually add the two 
# numbers together to get the result. Create a visualization that shows 
# what happens if you multiply these numbers by each other instead.
def ex15_8():
    """Finds the product of two die."""
    die_1, die_2 = Die(6), Die(6)
    max_product = die_1.num_sides * die_2.num_sides
    poss_results = range(1, max_product + 1)

    results = []
    for i in range(100_000):
        results.append(die_1.roll() * die_2.roll())

    frequencies = []
    for p in poss_results:
        frequencies.append(results.count(p))

    # Plotly.
    title = f"D{die_1.num_sides} & D{die_2.num_sides} roll product results."
    labels = {'x': 'Product', 'y': 'Frequency'}
    fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels,
        template='plotly_dark')
    fig.update_layout(xaxis_dtick=1)
    fig.show()


# 15-9. Die Comprehensions: For clarity, the listings in this section 
# use the long form of for loops. If you’re comfortable using list 
# comprehensions, try writing a comprehension for one or both of the 
# loops in each of these programs.
def ex15_9():
    """Replaces for loops with list comps."""
    die_1, die_2 = Die(6), Die(6)
    max_sum = die_1.num_sides + die_2.num_sides
    poss_results = range(2, max_sum + 1)

    results = [die_1.roll() + die_2.roll() for i in range(100_000)]
    frequencies = [results.count(r) for r in results_range]

    title = "Dice Rolls via List Comprehension"
    labels = {'x': 'Sum', 'y': 'Frequency'}
    fig = px.bar(x=poss_results, y=frequencies, title=title, labels=labels,
        template='plotly_dark')
    fig.update_layout(xaxis_dtick=1)
    fig.show()


# 15-10. Practicing with Both Libraries: Try using Matplotlib to make a 
# die-rolling visualization, and use Plotly to make the visualization 
# for a random walk. (You’ll need to consult the documentation for each 
# library to complete this exercise.)
def ex15_10():
    """Creates a die-rolling visualization with Matplotlib and a
    random walk visualization with Plotly.
    """
    
    def ex15_10_die_roll():
        """Visualizes die roll results with Matplotlib."""
        die_1, die_2 = Die(6), Die(6)
        max_sum = die_1.num_sides + die_2.num_sides
        poss_results = range(2, max_sum + 1)

        results = [die_1.roll() + die_2.roll() for i in range(100_000)]
        frequencies = [results.count(p) for p in poss_results]
        
        fig, ax = plt.subplots()
        ax.bar(x=poss_results, height=frequencies)
        plt.show()

    def ex15_10_random_walk():
        """Visualizes random walk with Plotly."""
        walk = RandomWalk(50)
        walk.fill_walk()
        
        fig = px.line(x=walk.x_values, y=walk.y_values)
        fig.update_yaxes(scaleanchor = 'x', scaleratio = 1,)
        fig.show()

    while True:
        pick = input(f"Select visualization to run. B to go back.\n"
            "1. Die Roll with Matplotlib\n"
            "2. Random Walk with Plotly\n\n"
            "> ")

        if pick.lower() == 'b':
            break

        elif pick not in ('1', '2'):
            print("Invalid selection. Try again.\n")

        elif pick == '1':
            ex15_10_die_roll()
        
        else:
            ex15_10_random_walk()

while True:
    chapter = 15
    exercises = '1-15'
    print(f"Ch. {chapter} exercises {exercises}. Q to quit.")
    execute_func = input("Run exercise #: ")
    if execute_func.lower() == 'q':
        break
    try:
        exec(f"ex{chapter}_{execute_func}()")
    except NameError:
        print(f"\nInvalid input. Enter a valid exercise number or Q to quit.")
    else:
        print()