import time, sys
indent = 0 # number of spaces to indent
indent_increasing = True # whether indentation is increasing or not

try:
    while True: # main loop
        print(' ' * indent + '********')#, end='')
        #print('********')
        time.sleep(0.1) # pause of 1/10 of a second

        if indent_increasing:
            # increase number of spaces
            indent += 1
            if indent == 20:
                # change direction
                indent_increasing = False

        else:
            # decrease number of spaces
            indent -= 1
            if indent == 0:
                # change direction
                indent_increasing = True

except KeyboardInterrupt:
    sys.exit()
