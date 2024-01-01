import pytest
from ch11_ex_employee import Employee


@pytest.fixture
def test_employee():
    """A test employee for all class method testing functions."""
    first, last = 'able', 'baker'
    test_employee = Employee(first, last)
    return test_employee

def test_give_default_raise(test_employee):
    """Tests give_raise method with default amount."""
    
    # Unnecessary after adding fixture.
    #first_name, last_name = 'able', 'baker'
    #test_employee = Employee(first_name, last_name)
    
    assert test_employee.annual_salary == 30_000
    test_employee.give_raise()
    assert test_employee.annual_salary == 35_000


def test_give_custom_raise(test_employee):
    """Tests give_raise method with custom amount."""
    
    # Unnecessary after adding fixture.
    #first_name, last_name = 'able', 'baker'
    #test_employee = Employee(first_name, last_name)
    assert test_employee.annual_salary == 30_000
    test_employee.give_raise(1_000)
    assert test_employee.annual_salary == 31_000
