"""Module with the Admin and Privileges classes."""

#from user_class_only import User
import user_class_only as uco

class Privileges:
    """Representation of priviliges."""
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

class Admin(uco.User):
    """Models an admin profile."""
    def __init__(self, first_name, last_name, gender, age, birthdate):
        """Initialize User attributes."""
        super().__init__(first_name, last_name, gender, age, birthdate)
        self.privileges = Privileges()
