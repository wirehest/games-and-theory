from ..unique_in_order import unique_in_order


def test_unique_in_order_all_upper():
    """Tests multiple dupes, one case."""
    assert unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']


def test_unique_in_order_case():
    """Tests dupes with different cases."""
    assert unique_in_order('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']


def test_unique_in_order_list():
    """Tests list input."""
    assert unique_in_order([1, 2, 2, 3, 3]) == [1, 2, 3]


def test_unique_in_order_tuple():
    """Tests tuple input."""
    assert unique_in_order((1, 2, 2, 3, 3)) == [1, 2, 3]