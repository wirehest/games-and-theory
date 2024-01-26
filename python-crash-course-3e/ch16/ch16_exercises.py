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
    with open('weather_data/sitka_weather_2021_full.csv', 'r') as data:
        reader = csv.reader(data)
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
    with open('weather_data/death_valley_2021_full.csv', 'r') as data:
        reader = csv.reader(data)
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
def ex16_3():
    """Plots 2023 high-low temp. data for San Francisco."""
    with open('weather_data/san_francisco_weather_2023.csv', 'r') as data:
        reader = csv.reader(data)
        header = next(reader)
        dates, highs, lows = [], [], []

        for row in reader:
            current_date = datetime.strptime(row[2], '%Y-%m-%d')
            try:
                high = int(row[4])
                low = int(row[5])
            except ValueError:
                print(f"Missing data for {current_date}")
            else:
                dates.append(current_date)
                highs.append(high)
                lows.append(low)

    fig, ax = plt.subplots()
    ax.plot(dates, highs, color='red', alpha=0.5, label='Highs')
    ax.plot(dates, lows, color='blue', alpha=0.5, label='Lows')
    ax.fill_between(dates, highs, lows, facecolor='blue', alpha=0.1)
    ax.legend()
    ax.set_title('San Francisco Highs & Lows')
    ax.set_xlabel('Date')
    ax.set_ylabel('Temp. (F)')
    fig.autofmt_xdate

    plt.show()


# 16-4. Automatic Indexes: In this section, we hardcoded the indexes 
# corresponding to the TMIN and TMAX columns. Use the header row to 
# determine the indexes for these values, so your program can work for 
# Sitka or Death Valley. Use the station name to automatically generate 
# an appropriate title for your graph as well.
def ex16_4():
    """Uses index variables instead of hardcoded ones to access data."""
    with open('weather_data/san_francisco_weather_2023.csv', 'r') as data:
        reader = csv.reader(data)
        header = next(reader)
        
        date_index = header.index('DATE')
        tmax_index = header.index('TMAX')
        tmin_index = header.index('TMIN')
        stn_index = header.index('NAME')

        dates, highs, lows, station_name = [], [], [], ''
        for i, row in enumerate(reader):
            current_date = datetime.strptime(row[date_index], '%Y-%m-%d')
            if i == 1:
                station_name = row[stn_index]
            try:
                high = int(row[tmax_index])
                low = int(row[tmin_index])
            except ValueError:
                print(f"Missing data for {current_date}")
            else:
                dates.append(current_date)
                highs.append(high)
                lows.append(low)

    fig, ax = plt.subplots()
    plt.grid(visible=True, alpha=0.3)
    fig.autofmt_xdate()
    ax.plot(dates, highs, color='red', alpha=0.5, label='Highs')
    ax.plot(dates, lows, color='blue', alpha=0.5, label='Lows')
    ax.fill_between(dates, highs, lows, facecolor='blue', alpha=0.1)
    ax.legend()
    ax.set_title(f'{station_name}:\nTemperature Highs & Lows')
    ax.set_xlabel('Date')
    ax.set_ylabel('Temp. (F)')
    ax.tick_params(labelsize=12)

    plt.show()


# 16-5. Explore: Generate a few more visualizations that examine any 
# other weather aspect you’re interested in for any locations you’re 
# curious about.
def ex16_5():
    """"""


while True:
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
