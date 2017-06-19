


def start_room():
    print("Your blind jump catapulted your ship into uncharted space, and not unscathed. It looks like your ship sustained major structural damage from colliding with eddies in jumpspace.\nThat's not the only bad news, somehow, some of the Protectorate's patrol ships are already here. Their signatures appear on your scanners, but not much else--luckily, you exited into a gas cloud which seems to be masking your own signature for the moment, but is also interfering with your scanners.\nYou need to survive and get word of the Protectorate's plans to the Resistance, but how?!\nYour FTL drives are still spooling up, in the meantime, do you...\n")
    print("1. Use the element of surprise to ATTACK the patrol first?")
    print("2. EXPLORE your immediate surroundings under cover of the gas cloud until your drives spin up.")
    print("3. Run an active SCAN to get a better idea of your surroundings.")

    start_choice = input("\n> ")

    if start_choice == "ATTACK":
        death(start_choice)

    elif start_choice == "EXPLORE":
        print("Being careful not to leave the cover of the gas cloud, you pulse your verniers to move around. Unfortunately, there isn't much you can see with your eyes and passive sensors alone. A beep from your drive console lets you know you can jump. You engage the drive. The patrol ships pick up the spike in energy and turn towards you, but they are too far to catch you.")
        asteroid_room()

    elif start_choice == "SCAN":
        scan_result()

def scan_result():
    print("Your scan lights you up like a christmas tree inside the gas cloud. You notice the patrol ships' signatures turn to approach. They are burning hard towards you!\nPanicking, the scan results catch you from the corner of your eye. It looks like the scanners found an old acceleration gate just outside the gas cloud. The scanners also picked up on a long-range beacon bounced through repeaters. The message was garbled though, and you don't know if a friend or foe awaits you at the source.\n It looks like your FTL drives have spooled up, but your navigation computer hasn't made any jump calculations yet! You decide...\n")
    print("1. Neither the gate or the beacon sound enticing. You flip some switches overheard and prepare to ATTACK the incoming patrol.")
    print("2. Funnel the BEACON telemetry into the navigation computer and use it to jump. At the very least, the jump won't be blind!")
    print("3. To launch your ship through the GATE. It looks ancient and probably hasn't been used in a long time. Maybe it will take you somewhere quieter than here!")

    scan_choice = input("\n> ")

    if scan_choice == "ATTACK":
        death(scan_choice)

    elif scan_choice == "BEACON":
        trader_room()

    elif scan_choice == "GATE":
        ancients_room()


def ancients_room():
    print("Your is spit out in view of a highly unstable star. In close proximity appears to be a colossal, ancient structure. Energy from the unstable star is slowly destroying everything in the system.\nIf that wasn't enough, you see a sphere-like creature bristling with energy approaching you at high speed. It might be on of the 'Ancients' of lore. Do you...")
    print("1. Make another blind JUMP immediately, before the star cooks your ship.")
    print("2. Try to EXPLORE the surroundings a bit while waiting for the drive to spool and computer to perform jump calculations.")
    print("3. Divert power to weapons and ATTACK the creature.")

    ancients_choice = input("\n> ")

    if ancients_choice == "JUMP":
        print("The ship is not able to sustain another blind jump in her state.")
        death(ancients_choice)

    elif ancients_choice == "EXPLORE":
        print("Time is not on your side, and the spherical creature is clearly not friendly either. It launches a salvo of what appear to be homing missiles made of pure energy at your ship.")
        death(ancients_choice)

    elif ancients_choice == "ATTACK":
        print("Somehow, in spite of your ship being one step away from being a vented derelict, you are able to overwhelm the Ancient. Salvos of shield-breaker missiles definitely helped, as they overloaded the Ancient's energy matrix weakening it greatly. After what seems like innumerable volleys fired from your laser cannons, the Ancient explodes in a brilliant white light.\nIn its wake, it leaves a singularity which you narrowly avoid.\nTaking stock of your ship afterwards, you notice something strange: your reactor's power levels are off the charts. The reactor must have absorbed the Ancient's energy when it dispersed.\nWith the reactor good to go, you key in the coordinates for the Resistance and prepare to make a long-range jump, as the star goes supernova behind you.")


def trader_room():
    print("You exit jumpspace a few clicks from a tradeship. Relieved, you take a breath before being jostled by a sudden blast over the wire from the tradeship advertising its wares.\nYou look at a readout of the message on your center screen. Looks like there are a lot of offers for jump coordinates promising riches for prospectors and miners. A few listings for full-service weapon upgrades also scroll by, followed by the usual alien trinkets--extra-terrestrial snowglobes and the like.\n Do you...")
    print("1. Transfer credits for some jump COORDINATES in a quiet area of space en route to the Resistance base.")
    print("2. Transfer credits to UPGRADE YOUR WEAPON.")
    print("3. Transfer credits to BUY SOME TRINKETS.")

    trader_choice = input("\n> ")

    if trader_choice == "COORDINATES":
        ancient_room()

    elif trader_choice == "UPGRADE YOUR WEAPON":
        print("As you pull your ship into one of the drydocks to install your newly-purchased weapon, Protectorate patrol ships exit jumpspace and begin descending upon you. The tradeship forcibly unmoors you and ejects you away.")
        death(trader_choice)

    elif trader_choice == "BUY SOME TRINKETS":
        print("You return to your ship from the tradeship's hangar and bazaar and admire the shiny but useless bauble you just purchased. Suddenly, Protectorate patrol ships exit jumpspace and begin descending upon you. The tradeship forcibly unmoors you and ejects you away.")
        death(trader_choice)


def asteroid_room():
    print("You find yourself in an unstable asteroid belt surrounding a brilliant M-class star. It looks like this belt was once a hub of mining activity, but it's now a graveyard with several derelict mining barges littered amongst the rocks, slowly being perforated with rock impacts. Some of the ships have visible plasma scoring on their hulls--signs of a battle.\nA small asteroid nearly collides with your ship while you are busy with the scan readout.\nDo you...")
    print("1. DOCK with one of the derelict ships and pull data from the ship's computer.")
    print("2. EXPLORE the immediate area.")
    print("3. That near-collision was dangerous, make a blind JUMP out before your ship is bestowed another superfluous hole in her hull.")

    asteroid_choice = input("\n> ")

    if asteroid_choice == "DOCK":
        print("You are able to clamp onto the nearest barge's docking collar, but the collar is too badly damaged and you aren't able to make a seal so that you can enter and explore the barge. The ship-to-ship interface works fine though, and you are able to pull some coordinates in the last log. Looks like one of the officers tracked the jump trajectory of the barge's attackers. You decide to explore the coordinates.")
        ancients_room()

    elif asteroid_choice == "EXPLORE":
        print("As you fly through field, another smaller asteroid misses your scanners and drills a clean hole right through your ship. While it missed anything of important, you realize that dozens more small asteroids are flying your way.")
        death(asteroid_choice)

    elif asteroid_choice == "JUMP":
        print("The ship is not able to sustain another blind jump in her state.")
        death(asteroid_choice)

def good_ending():
    print("")

def death(message):
    print(f"It seems the decision to {message} was the wrong choice! You do your best at the helm, but that first blind jump really crippled her and you find yourself taking massive amounts of damage. It is not long before the hull is breached, and ship is voided into space.")

start_room()
