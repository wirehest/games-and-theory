game_board = {'1h': 'bking', '4d': 'wpawn', '6c': 'wqueen', '2g': 'bbishop', '5h': 'bqueen', '3e': 'wking'}

# total piece counter
def count_all_pieces(board):
    piece_counter = 0
    for v in board.values():
        piece_counter += 1
    if 1 <= piece_counter <= 16:
        print(f"Total pieces: {piece_counter} - OK")
        return True
    else:
        print(f"Total pieces: {piece_counter} - FAILED")
        return False

# pawn counter
def count_pawns(board):
    pawn_counter = 0
    for piece in board.values():
        if piece[1:] == "pawn":
            pawn_counter += 1
        else:
            continue
    if pawn_counter <= 8:
        print(f"Total pawns: {pawn_counter} - OK")
        return True
    else:
        print(f"Total pawns: {pawn_counter} - FAILED")
        return False

# space validator
def space_validator(board):
    valid_spaces = []
    position_validity = True
    for w in range(1, 9):
        for h in ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'):
            valid_spaces.append(str(w) + h)
    for k in board.keys():
        position_validity *= k in valid_spaces
    if position_validity == True:
        print(f"Space checker - OK")
    else:
        print(f"Space checker - FAILED")
    return position_validity

# check piece names
def piece_checker(board):
    valid_pieces = ('pawn', 'rook', 'bishop', 'knight', 'queen', 'king')
    for piece in board.values():
        if ((piece[0] == "b") or (piece[0] == "w") and (piece[1:] in valid_pieces)):
            print("Piece names - OK")
            return True
        else:
            print(f"Piece names - FAILED")
            return False

# check there's max one king and queen on each side
def king_queen_counter(board):
    valid_royals = ('bking', 'wking', 'bqueen', 'wqueen')
    for royal in valid_royals:
        counter = 0
        for v in board.values():
            if royal == v:
                counter += 1
            else:
                continue
        if counter <= 1:
            print(f"King & Queen check - OK")
            return True
        else:
            print(f"King & Queen check - INVALID")
            return False

# runs all checking functions
def is_valid_chessboard(board):
    if count_all_pieces(board) * count_pawns(board) * space_validator(board) * piece_checker(board) * king_queen_counter(board) == True:
        print("\nChessboard is VALID")
    else:
        print("\nChessboard is INVALID")

is_valid_chessboard(game_board)
