def longest_consec(strarr, k):
    """"""
    l = len(strarr)
    strlens = [len(s) for s in strarr]
    ranges = [tuple(range(i, i+k)) for i in range(l-k+1)]
    longest = []

    for indices in ranges:
        length = 0
        for i in indices:
            length += strlens[i]
        
        longest.append(length)

    try:
        pos = longest.index(max(longest))
    except ValueError:
        return ''
    else:
        return ''.join([strarr[x] for x in range(pos, pos+k)])


assert longest_consec(
    ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'],
    2) == 'folingtrashy' or 'abcdefuvwxyz'
assert longest_consec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 
    2) == 'abigailtheta'
assert longest_consec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
    2) == 'abigailtheta'
assert longest_consec(
    ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 
    'oocccffuucccjjjkkkjyyyeehh'], 
    1) == 'oocccffuucccjjjkkkjyyyeehh'
assert longest_consec([], 3) == ''
assert longest_consec(
    ['itvayloxrp','wkppqsztdkmvcuwvereiupccauycnjutlv',
    'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 
    2) == ('wkppqsztdkmvcuwvereiupccauycnjutl'
    'vvweqilsfytihvrzlaodfixoyxvyuyvgpck')
assert longest_consec(
    ['wlwsasphmxx','owiaxujylentrklctozmymu','wpgozvxxiu'], 
    2) == 'wlwsasphmxxowiaxujylentrklctozmymu'
assert longest_consec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2) == ''
assert longest_consec(
    ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], 
    3) == 'ixoyx3452zzzzzzzzzzzz'
assert longest_consec(
    ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], 15) == ''
assert longest_consec(
    ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], 0) == ''