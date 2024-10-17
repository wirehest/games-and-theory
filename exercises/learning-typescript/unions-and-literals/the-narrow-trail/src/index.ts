export function runCommands(): boolean {
	// Declare your variables and runtime logic here! ✨
	interface Supplies {
		food: number;
		water: number;
	}

	let day = 1;
	let resupply: 'food' | 'water' | null | undefined;
	let supplies: Supplies = {
		food: 5,
		water: 5,
	};

	while (day <= 7) {
		if (!supplies.food || !supplies.water) return false;

		let roll = rollDice();
		switch (roll) {
			case 1:
				resupply = 'food';
				break;
			case 2:
				resupply = 'water';
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				if (resupply === undefined || resupply === null) {
					resupply = roll % 2 ? 'water' : 'food';
				} else {
					supplies[resupply] += roll;
					resupply = null;
				}
				break;
		}

		supplies.food--;
		supplies.water--;
		day++;
	}

	return supplies.food > 0 && supplies.water > 0;
}

function rollDice(): number {
	return Math.floor(Math.random() * 6) + 1;
}
