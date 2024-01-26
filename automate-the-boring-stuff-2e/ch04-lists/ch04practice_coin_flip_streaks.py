import random

streak_length = 6
sequence_length = 100 # length of individual sequences
total_runs = 10_000 # total number of sequences to generate

# flip sequence generator function
def flip_gen(seq_length):
    sequence = []
    for i in range(seq_length):
        if random.randint(0, 1) == 0:
            sequence.append('H')
        else:
            sequence.append('T')
    return sequence

# experiment set generator function
def experiment_runs(run_count):
    runs = []
    for i in range(run_count):
        runs.append(flip_gen(sequence_length))
    return runs

# identify streaks
def streak_counter(seq):
    streak_count = 0
    # print(seq)

    for run_num in range(len(seq)):
        for i in range(0, len(seq[run_num]) - streak_length + 1):
            if (seq[run_num][i:i + streak_length] == ['H', 'H', 'H', 'H', 'H', 'H']) or (seq[run_num][i:i + streak_length] == ['T', 'T', 'T', 'T', 'T', 'T']):
                streak_count += 1
                break
            else:
                continue
    return streak_count

number_of_streaks = streak_counter(experiment_runs(total_runs))
print('Chance of streak: %s%%' % (number_of_streaks / 100))
