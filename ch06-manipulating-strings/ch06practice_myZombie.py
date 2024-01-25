import zombiedice, random, time

class MyZombie:
    def __init__(self, name):
        # All zombies must have a name:
        self.name = name

    def turn(self, gameState):
        # gameState is a dict with info about the current state of the game.
        # You can choose to ignore it in your code.

        diceRollResults = zombiedice.roll() # first roll
        # roll() returns a dictionary with keys 'brains', 'shotgun', and
        # 'footsteps' with how many rolls of each type there were.
        # The 'rolls' key is a list of (color, icon) tuples with the
        # exact roll result information.
        # Example of a roll() return value:
        # {'brains': 1, 'footsteps': 1, 'shotgun': 1,
        #  'rolls': [('yellow', 'brains'), ('red', 'footsteps'),
        #            ('green', 'shotgun')]}

        # REPLACE THIS ZOMBIE CODE WITH YOUR OWN:
        brains = 0
        while diceRollResults is not None:
            brains += diceRollResults['brains']

            if brains < 2:
                diceRollResults = zombiedice.roll() # roll again
            else:
                break

"""
A bot that, after the first roll, randomly decides if it will continue or stop
A bot that stops rolling after it has rolled two brains
A bot that stops rolling after it has rolled two shotguns
A bot that initially decides it’ll roll the dice one to four times, but will stop early if it rolls two shotguns
A bot that stops rolling after it has rolled more shotguns than brains
"""

class RandomStopContinue:
    def __init__(self, name):
        self.name = name

    def turn(self, gameState):
        dice_roll_results = zombiedice.roll() # first roll
        while dice_roll_results and random.randint(0, 1) == 0:
                dice_roll_results = zombiedice.roll()

class TwoBrains:
    def __init__(self, name):
        self.name = name

    def turn(self, gameState):
        dice_roll_results = zombiedice.roll() # first roll
        brains = 0
        while dice_roll_results is not None:
            brains += dice_roll_results['brains']

            if brains < 2:
                dice_roll_results = zombiedice.roll()
            else:
                break

class TwoShotguns:
    def __init__(self, name):
        self.name = name

    def turn(self, gameState):
        dice_roll_results = zombiedice.roll() # first roll
        shotguns = 0
        while dice_roll_results is not None:
            shotguns += dice_roll_results['shotgun']
            if shotguns < 2:
                dice_roll_results = zombiedice.roll()
            else:
                break

class RollFourThenTwoShotguns:
    def __init__(self, name):
        self.name = name

    def turn(self, gameState):
        dice_roll_results = zombiedice.roll() # first roll
        roll_count = range(random.randint(1, 4))
        shotguns = 0
        # print(dice_roll_results)
        while dice_roll_results is not None:
            for r in roll_count:     # doesn't work if for below while
                # print(f"shotguns: {dice_roll_results['shotgun']}")
                shotguns += dice_roll_results['shotgun']
                # input()
                if shotguns < 2:
                    # print(f'shotguns = {shotguns}, rolling again.')
                    dice_roll_results = zombiedice.roll()
                else:
                    # print(f'shotguns = {shotguns}, breaking.')
                    break
            break

class MoreGunsThanBrains:
    def __init__(self, name):
        self.name = name

    def turn(self, gameState):
        dice_roll_results = zombiedice.roll() # first roll
        brains = 0
        shotguns = 0
        while dice_roll_results is not None:
            brains += dice_roll_results['brains']
            shotguns += dice_roll_results['shotgun']
            print(f'guns: {shotguns}, brains: {brains}')
            if shotguns <= brains:
                dice_roll_results = zombiedice.roll()
            else:
                break

zombies = (
    zombiedice.examples.RandomCoinFlipZombie(name='Random'),
    zombiedice.examples.RollsUntilInTheLeadZombie(name='Until Leading'),
    zombiedice.examples.MinNumShotgunsThenStopsZombie(name='Until 2 Shotguns', minShotguns=2),
    zombiedice.examples.MinNumShotgunsThenStopsZombie(name='Until 1 Shotgun', minShotguns=1),
    MyZombie(name='My Zombie Bot'),
    # Add any other zombie players here.
    RandomStopContinue(name='Randomly Stops or Continues'),
    TwoBrains(name='Stops at Two Brains'),
    TwoShotguns(name='Stops at Two Shotguns'),
    RollFourThenTwoShotguns(name='Roll One to Four then Two Shotguns'),
    MoreGunsThanBrains(name='Stops When More Shotguns Than Brains'),
)

# Uncomment one of the following lines to run in CLI or Web GUI mode:
zombiedice.runTournament(zombies=zombies, numGames=1000)
# zombiedice.runWebGui(zombies=zombies, numGames=1000)
