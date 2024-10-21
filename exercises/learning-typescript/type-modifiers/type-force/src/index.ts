// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

// Create and export a `duel` function with two parameters, `good` and `bad`, both of which are objects containing the following properties:
//
// - `mutations`: Array of strings that are keys in the `mutationsLibrary` object
// - `name`: A string
//
// Internally it will create a character for each variable.
// A character object can be created with the following steps:
//
// 1. Initialize a `flying` property as `false`, and `power` and `toughness` as `1`
// 2. For each mutation in the power, run the corresponding function from `mutationsLibrary` on the character
//
// The `duel` function's return type should be a read-only tuple containing two elements:
//
// 1. Either `"hero"` or `"villain"`, indicating who won, as computed by who has the higher of: their power divided by the other character's toughness
// 2. The winning character object

export type Outcome = readonly ['hero' | 'villain', Character];

export type Character = {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
};

export interface Duelist {
	name: string;
	mutations: Mutations;
}

export type Mutations = (keyof typeof mutationsLibrary)[];

export function duel(good: Duelist, bad: Duelist): Outcome {
	let goodie = createCharacter(good.name, good.mutations);
	let baddie = createCharacter(bad.name, bad.mutations);
	return goodie.power / baddie.toughness > baddie.power / goodie.toughness
		? (['hero', goodie] as const)
		: (['villain', baddie] as const);
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(name: string, mutations: Mutations) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}
