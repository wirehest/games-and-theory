// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorConfig {
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (consumed: Consumed) => number;
}

export class Horror {
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (consumed: Consumed) => number;
	#allConsumed: Consumed[] = [];

	constructor(config: HorrorConfig) {
		this.name = config.name;
		this.isEvil = config.isEvil;
		this.getPowerFrom = config.getPowerFrom;
	}

	public doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			let consumed: Consumed = {
				evil: opponent.isEvil(),
				name: opponent.name,
				power: opponent.getPower(),
			};
			this.#allConsumed.push(consumed);
		}
	}

	public getPower(): number {
		return this.#allConsumed.reduce(
			(acc, consumed) => acc + this.getPowerFrom(consumed),
			this.#allConsumed.length
		);
	}
}

export function createDemon() {
	let name = 'Demon';
	let isEvil = (): boolean => true;
	let getPowerFrom = (consumed: Consumed) => {
		return consumed.evil ? consumed.power / 2 : 2 * consumed.power;
	};

	return new Horror({ name, isEvil, getPowerFrom });
}

export function createSorcerer(name: string, evil: boolean) {
	let isEvil = (): boolean => evil;
	let getPowerFrom = (consumed: Consumed): number => {
		return consumed.evil === evil ? 2 * consumed.power : consumed.power;
	};

	return new Horror({ name, isEvil, getPowerFrom });
}
