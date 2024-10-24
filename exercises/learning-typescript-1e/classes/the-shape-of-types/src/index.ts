// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	protected abstract readonly name: string;
	#allConsumed: Consumed[] = [];

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

	protected abstract getPowerFrom(consumed: Consumed): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	name = 'Demon';

	getPowerFrom(consumed: Consumed): number {
		return consumed.evil ? consumed.power / 2 : 2 * consumed.power;
	}

	isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	getPowerFrom(consumed: Consumed): number {
		return consumed.evil === this.#evil ? 2 * consumed.power : consumed.power;
	}

	isEvil() {
		return this.#evil;
	}
}
