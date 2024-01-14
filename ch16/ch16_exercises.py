#! python3

import csv
import matplotlib.pyplot as plt
import logging

from datetime import datetime
from pathlib import Path


logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
logging.disable(logging.DEBUG)


# 16-1. Sitka Rainfall: Sitka is located in a temperate rainforest, so 
# it gets a fair amount of rainfall. In the data file 
# sitka_weather_2021_full.csv is a header called PRCP, which represents 
# daily rainfall amounts. Make a visualization focusing on the data in 
# this column. You can repeat the exercise for Death Valley if you’re 
# curious how little rainfall occurs in a desert.
def ex16_1():
    """Charts Death Valley and Sitka 2021 rainfall."""
    dates, prcps_sitka, prcps_dv = [], [], []
    #locs = {'sitka': 'sitka_weather_2021_full.csv',
    #    'dv': 'death_valley_2021_full.csv'}

    #for k in locs.keys():
    with open('weather_data/sitka_weather_2021_full.csv', 'r') as loc:
        reader = csv.reader(loc)
        header_row = next(reader)
        
        for row in reader:
            current_date = datetime.strptime(row[2], '%Y-%m-%d')
            try:
                prcp = float(row[5])
            except ValueError:
                print(f"Missing data: {current_date}")
            else:
                dates.append(current_date)
                prcps_sitka.append(prcp)

    # TODO refactor
    with open('weather_data/death_valley_2021_full.csv', 'r') as loc:
        reader = csv.reader(loc)
        header_row = next(reader)
        
        for row in reader:
            current_date = datetime.strptime(row[2], '%Y-%m-%d')
            try:
                prcp = float(row[5])
            except ValueError:
                print(f"Missing data: {current_date}")
            else:
                #dates.append(current_date)
                prcps_dv.append(prcp)

    plt.style.use('seaborn-v0_8')
    fig, ax = plt.subplots()
    ax.plot(dates, prcps_sitka, label='Sitka', color='red', alpha=0.75)
    ax.plot(dates, prcps_dv, label='Death Valley', color='blue', alpha=0.75)

    # Format plot
    ax.set_title('Sitka & Death Valley Rainfall')
    ax.set_xlabel('Date', fontsize=12)
    ax.set_ylabel('Rainfall (inches)')
    ax.legend()         # Displays legend (uses label arg)
    fig.autofmt_xdate
    plt.show()


# 16-2. Sitka–Death Valley Comparison: The temperature scales on the 
# Sitka and Death Valley graphs reflect the different data ranges. To 
# accurately compare the temperature range in Sitka to that of Death 
# Valley, you need identical scales on the y-axis. Change the settings 
# for the y-axis on one or both of the charts in Figures 16-5 and 16-6. 
# Then make a direct comparison between temperature ranges in Sitka and 
# Death Valley (or any two places you want to compare).
def ex16_2():
    """"""

# 16-3. San Francisco: Are temperatures in San Francisco more like 
# temperatures in Sitka or temperatures in Death Valley? Download some 
# data for San Francisco, and generate a high-low temperature plot for 
# San Francisco to make a comparison.


# 16-4. Automatic Indexes: In this section, we hardcoded the indexes 
# corresponding to the TMIN and TMAX columns. Use the header row to 
# determine the indexes for these values, so your program can work for 
# Sitka or Death Valley. Use the station name to automatically generate 
# an appropriate title for your graph as well.


# 16-5. Explore: Generate a few more visualizations that examine any 
# other weather aspect you’re interested in for any locations you’re 
# curious about.


"""while True:
    chapter = 16
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
"""