#! python3
"""
c12practice_command_line_email.py

Write a program that takes an email address and string of text on the command line and then, using selenium, logs in to your email account and sends an email of the string to the provided address. (You might want to set up a separate email account for this program.)

This would be a nice way to add a notification feature to your programs. You could also write a similar program to send messages from a Facebook or Twitter account.
"""

import logging
import time
import re

from selenium import webdriver

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')
logging.disable(logging.DEBUG)

# TODO update these to accept user input via sysv.
# TODO implement regex verification of email address.
email_dest = 'karmon.jd@gmail.com'
message = 'Selenium automation test message.'

profile = webdriver.FirefoxProfile('/home/rubaboo/.mozilla/firefox/blyo2mq3.default-release')
browser = webdriver.Firefox(firefox_profile=profile)
# browser.get('https://duck.com')
browser.get('https://tempmail.ninja/send-anonymous-email/')

# Fills in recipient address.
recipient_elem = browser.find_element_by_id('send_destinatario')
logging.info(type(recipient_elem))
recipient_elem.send_keys(email_dest)

# Fills in email subject.
subject_elem = browser.find_element_by_id('send_asunto')
logging.info(type(subject_elem))
subject_elem.send_keys('Automated Message')

# Fills in message
message_elem = browser.find_element_by_css_selector('#contenido-nuevo-mensaje > div.ck.ck-reset.ck-editor.ck-rounded-corners > div.ck.ck-editor__main > div')
message_elem.click()
message_elem.send_keys(message)
logging.info(type(message_elem))

# TODO defeat captcha
# captcha_elem = browser.find_element_by_id('recaptcha-anchor')
#captcha_elem = browser.find_element_by_class_name('recaptcha-checkbox-border')
# logging.info(type(captcha_elem))
# time.sleep(10)
# captcha_elem.click()

# TODO sends the message.
# send_elem = browser.find_element_by_id('send-anonymous-email-btn')
# logging.info(type(send_elem))


