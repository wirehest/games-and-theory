#! python3
"""
c12practice_2048.py

2048 is a simple game where you combine tiles by sliding them up, down, left, or right with the arrow keys. You can actually get a fairly high score by repeatedly sliding in an up, right, down, and left pattern over and over again. Write a program that will open the game at https://gabrielecirulli.github.io/2048/ and keep sending up, right, down, and left keystrokes to automatically play the game.
"""

import logging
import time
import re

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(logging.DEBUG)

profile = webdriver.FirefoxProfile('/home/rubaboo/.mozilla/firefox/blyo2mq3.default-release')
browser = webdriver.Firefox(firefox_profile=profile)
browser.get('https://play2048.co')

# elements that didn't work: game-container, container, tile-container,
# html_elem = browser.find_element_by_tag_name('body')
# html_elem = browser.find_element_by_tag_name('body')
html_elem = browser.find_element_by_class_name('grid-container')
#html_elem = browser.find_element_by_css_selector('div-gpt-ad-play2048_co-box-4-0')
# html_elem = browser.find_element_by_css_selector('.grid-container')
# html_elem = browser.find_element_by_class_name('grid-cell')
# html_elem = browser.find_element_by_class_name('game-container')
# html_elem = browser.find_element_by_class_name('grid-row')
# html_elem = browser.find_element_by_class_name('game-intro')
# html_elem = browser.find_element_by_tag_name('html')

commands = (Keys.UP, Keys.LEFT, Keys.DOWN, Keys.RIGHT)
# html_elem.click()
logging.info(len(html_elem))

while True:
    html_elem.send_keys(Keys.UP)
    html_elem.send_keys(Keys.LEFT)
    html_elem.send_keys(Keys.DOWN)
    html_elem.send_keys(Keys.RIGHT)
    #for key in commands:
        # html_elem.send_keys(key)

# TODO getting "not reachable by keyboard" error. Need to find workaround.
