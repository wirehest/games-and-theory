from ..split_strings import solution


def test_split_strings_even_length():
    """Tests a string of even length."""
    assert solution('asdfadsf') == ['as', 'df', 'ad', 'sf']


def test_split_strings_odd_length():
    """Tests a string of odd length."""
    assert solution('asdfads') == ['as', 'df', 'ad', 's_']


def test_split_strings_empty():
    """Tests an empty string."""
    assert solution('') == []


def test_split_strings_one():
    """Tests a single-character string."""
    assert solution('x') == ['x_']