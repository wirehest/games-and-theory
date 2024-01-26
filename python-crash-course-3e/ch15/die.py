from random import randint

class Die:
    """Dice model."""

    def __init__(self, num_sides=6):
        """Init."""
        self.num_sides = num_sides

    def roll(self):
        """Rolls the dice."""
        return randint(1, self.num_sides)