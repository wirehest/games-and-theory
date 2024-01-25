#! python3
# searchpypi - Opens several search results.

import webbrowser
import requests
import sys
import bs4
import logging

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(logging.CRITICAL)

print('Searching...')   # Display text while downloading the search result.
res = requests.get('https://pypi.org/search/?q=' + ' '.join(sys.argv[1:]))
logging.info(res)
res.raise_for_status()

# Retrieves top search result links.
soup = bs4.BeautifulSoup(res.text, 'html.parser')

# Opens browser tab for each result.
link_elems = soup.select('.package-snippet')
num_open = min(5, len(link_elems))
for i in range(num_open):
    url = 'https://pypi.org' + link_elems[i].get('href')
    print('Opening', url)
    webbrowser.open(url)
