class Employee:
    """Model of an employee."""

    def __init__(self, first_name, last_name, annual_salary=30_000):
        self.first_name = first_name
        self.last_name = last_name
        self.annual_salary = annual_salary

    def about_employee(self):
        """Prints employee information."""
        print(f"Name: {self.first_name.title()} {self.last_name.title()}"
            f"\nAnnual Salary: ${self.annual_salary}\n")

    def give_raise(self, amount=5_000):
        """Gives employee a raise."""
        self.annual_salary += amount