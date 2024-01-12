class Privileges:
    """Representation of privileges."""
    def __init__(self):
        """Initialize list of privileges."""
        self.privileges = [
            'can add post', 'can delete post',
            'can ban user', 'can delete user'
            ]

    def show_privileges(self):
        """Lists the administrator's privileges."""
        for privilege in self.privileges:
            print(privilege)

class User:
    """Models a user profile."""
    def __init__(self, first_name, last_name, gender, age, birthdate):
        """Initialize attributes."""
        self.first_name = first_name
        self.last_name = last_name
        self.gender = gender
        self.age = age
        self.birthdate = birthdate

    def describe_user(self):
        """Prints all attributes."""
        print(f"First Name: {self.first_name.title()}")
        print(f"Last Name: {self.last_name.title()}")
        print(f"Gender: {self.gender.title()}")
        print(f"Age: {self.age}")
        print(f"Birthdate: {self.birthdate}")            

    def greet_user(self):
        """Greets user, customized to their first name."""
        print(f"Hi {self.first_name.title()}! Hope you're well!")

class Admin(User):
    """Models an admin profile."""
    def __init__(self, first_name, last_name, gender, age, birthdate):
        """Initialize User attributes."""
        super().__init__(first_name, last_name, gender, age, birthdate)
        self.privileges = Privileges()