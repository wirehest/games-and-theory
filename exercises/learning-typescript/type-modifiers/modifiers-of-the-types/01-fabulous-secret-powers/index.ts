import { characters } from './characters';

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

export interface Character {
	name: string;
	powers: string[];
	side: 'evil' | 'good';
}

export function announceCharacter(character: string): Character {
	let parsed: Character = JSON.parse(character);
	console.log(`I am ${parsed.name}.`);
	console.log(`My powers are: ${parsed.powers.join(', ')}.`);
	console.log(`I am ${parsed.side}.`);
	return parsed;
}
