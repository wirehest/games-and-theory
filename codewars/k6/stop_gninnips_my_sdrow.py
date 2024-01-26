#!/usr/bin/env python3


def spin_words(sentence):
    """"""
    words = sentence.split()
    spun = [w[::-1] if len(w) >= 5 else w for w in words] 
    
    return (' ').join(spun)