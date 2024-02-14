"""The rgb function is incomplete. Complete it so that passing in RGB 
decimal values will result in a hexadecimal representation being 
returned. Valid decimal values for RGB are 0 - 255. Any values that 
fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand 
with 3 will not work here.
"""


def rgb(r, g, b):
    """Converts R, G, B values into a 6-character long hex value.""" 
    rgb = tuple(min(max(0, d), 255) for d in (r, g, b))
    return ''.join([format(v, '02X') for v in rgb])