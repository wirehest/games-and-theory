"""A representation of a restaurant."""

class Restaurant:
    """A model of a restaurant."""
    def __init__(self, restaurant_name, cuisine_type):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type

    def describe_restaurant(self):
        """Prints the restaurant name and cuisine type."""
        print(f"Restaurant name: {self.restaurant_name.title()}")
        print(f"Cuisine: {self.cuisine_type.title()}")

    def open_restaurant(self):
        """Prints that the restaurant is open."""
        print("The restaurant is open")

class IceCreamStand(Restaurant):
    """A model of an ice cream stand, subclass of Restaurant."""
    def __init__(self, restaurant_name, cuisine_type):
        """Initialize attributes of Restaurant."""
        super().__init__(restaurant_name, cuisine_type)
        self.flavors = ['vanilla', 'chocolate', 'strawberry']

    def display_flavors(self):
        """Displays the flavors offered by the ice cream stand."""
        print(f"{self.restaurant_name.title()} offers the following"
            " flavors: ")
        for flavor in self.flavors:
            print(flavor.title())