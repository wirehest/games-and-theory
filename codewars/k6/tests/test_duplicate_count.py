from ..duplicate_count import duplicate_count


def test_duplicate_count_basic():
    """Basic test case, no repetitions or case changes."""
    assert duplicate_count('abcde') == 0


def test_duplicate_count_rep_adj():
    """Tests adjacent repetition."""
    assert duplicate_count('aabbcde') == 2


def test_duplicate_count_rep_and_case():
    """Tests repetition and case change."""
    assert duplicate_count('aabBcde') == 2


def test_duplicate_count_rep_not_adj_1():
    """Tests non-adjacent repetition."""
    assert duplicate_count('indivisibility') == 1


def test_duplicate_count_rep_not_adj_2():
    """Tests non-adjacent repetition of multiple chars."""
    assert duplicate_count('Indivisibilities') == 2


def test_duplicate_count_numerals():
    """Tests repeating numerals."""
    assert duplicate_count('aA11') == 2


def test_duplicate_count_upper():
    """Tests repetition, all upper case."""
    assert duplicate_count('ABBA') == 2










