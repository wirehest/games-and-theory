#!/home/rubaboo/PyProjects/venv_automate_boring/bin/python python3
# downloadXKCD - Downloads every XKCD comic.

import requests
# import os
import bs4
import logging

from pathlib import Path

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
# logging.disable(logging.CRITICAL)

url = 'https://xkcd.com'                            # Starting URL.
Path('xkcd').mkdir(parents=True, exist_ok=True)    # Create save dir.
while not url.endswith('#'):
    # Downloads the page.
    print('Downloading page %s...' % url)
    res = requests.get(url)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')

    # Finds the URL of the comic image.
    comic_elem = soup.select('#comic img')
    logging.info(f'len(comic_elem): {len(comic_elem)}')
    if comic_elem == []:
        print('Could not find comic image.')

    else:
        comic_url = 'https:' + comic_elem[0].get('src')

        # Downloads the image.
        print('Downloading image %s...' % comic_url)
        res = requests.get(comic_url)
        res.raise_for_status()

        # Saves the image to ./xkcd.
        # image_file = open(os.path.join('xkcd', os.path.basename(comic_url)), 'wb')
        image_file = open(Path('xkcd') / Path(comic_url).name, 'wb')

        for chunk in res.iter_content(100_000):
            image_file.write(chunk)
        image_file.close()

    # Get the Prev button's URL.
    prev_link = soup.select('a[rel="prev"]')[0]
    url = 'https://xkcd.com' + prev_link.get('href')

print('Done.')
