""" Fantasy Game Inventory and List Updater """

player_inventory = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}
dragon_loot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

def display_inventory(inventory):
    print("Inventory:")
    total_counter = 0
    for k, v in inventory.items():
        print(f"{v} {k}")
        total_counter += v
    print(f"Total number of items: {total_counter}")

def add_to_inventory(inventory, added_items):
    for loot in added_items:
        inventory.setdefault(loot, 0)
        inventory[loot] += 1
    return inventory

display_inventory(player_inventory)
print(f"\n\nLooted the following: {dragon_loot}\n\n")
player_inventory = add_to_inventory(player_inventory, dragon_loot)
display_inventory(player_inventory)
