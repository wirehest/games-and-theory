""" Exercise 17
Use the BeautifulSoup and requests Python packages to print out a list of all the article titles on the New York Times homepage.
"""

import requests
import re
from bs4 import BeautifulSoup
from datetime import date

class Parser(object):

    def __init__(self):
        pass

    def getsite(url):
        """ Gets raw HTML """
        r = requests.get(url)
        r_html = r.text
        return r_html

    def parse(source, url):
        """ Parses through via BeautifulSoup """
        raw_html = Parser.getsite(url)
        soup = BeautifulSoup(raw_html, "html.parser")
        titles = soup.find_all("article", class_="story theme-summary", id=re.compile("topnews-"))
        Parser.showtitles(titles, url)

    def showtitles(headings, url):
        """ Cleans up and prints """
        print(f"Headlines pulled from {url} on {date.today()}\n")
        count = 0
        for heading in headings:
            count += 1
            print(f"{count}. " + heading.find(class_="story-heading").get_text())

parse_nytimes = Parser()
parse_nytimes.parse("https://www.nytimes.com")
