from ..spin_words import spin_words


def test_spin_words_one():
    """Tests input string with one word with length >= 5."""
    assert spin_words('Hey fellow warriors') == 'Hey wollef sroirraw'
    

def test_spin_words_two():
    """Tests input string with two words with length >= 5."""
    assert spin_words('This is a test') == 'This is a test'


def test_spin_words_none():
    """Tests input string with no words with length >= 5."""
    assert spin_words('This is another test') == 'This is rehtona test'