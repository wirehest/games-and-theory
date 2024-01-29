def rot13(message):
    """Decodes an input message using ROT13. Duplicate puzzle."""
    alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    shifted = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

    return message.translate(str.maketrans(alpha, shifted))

assert rot13('EBG13 rknzcyr.') == 'ROT13 example.'