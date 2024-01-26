def slices(input_string, cut):
    slices_list = []
    n = 0
    print(f"input string: {input_string}; length + 1: {len(input_string) + 1}; cut: {cut}")
    if cut < len(input_string) + 1 and cut != 0:
        seq = list(range(0, len(input_string) - cut + 1))
    elif cut > len(input_string) + 1 and cut != 0:
        seq = [0]
    else:
        raise ValueError

    while n <= max(seq):
        print(f"seq: {seq}")
        for x in seq:
            collector = []
            a = list(range(x, x + cut))
            print(f"a: {a}")

            for y in a:
                collector.append(int(list(input_string)[y]))
                print(f"collector: {collector}")

            slices_list.append(collector)
            print(f"return: {slices_list}")
            n += 1

        return slices_list
        print(slices_list)
