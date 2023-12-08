grid = [['.', '.', '.', '.', '.', '.'],
        ['.', 'O', 'O', '.', '.', '.'],
        ['O', 'O', 'O', 'O', '.', '.'],
        ['O', 'O', 'O', 'O', 'O', '.'],
        ['.', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', '.'],
        ['O', 'O', 'O', 'O', '.', '.'],
        ['.', 'O', 'O', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.']]

def transpose(input_grid):
    new_grid = []
    grid_width = len(input_grid[0])
    grid_height = len(input_grid)

    for x in range(grid_width):
        for y in range(grid_height):
            print(input_grid[y][x], end='')
        print()

transpose(grid)
