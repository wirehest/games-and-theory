// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Settings = {
	attempts: number;
	makeGuess: MakeGuess;
	validateGuess: ValidateGuess;
};
export type MakeGuess = (text: string, attempt: number) => string;
export type ValidateGuess = (guess: string) => boolean;

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Settings): (text: string) => string | undefined {
	return function (text) {
		for (let attempt of [...Array(attempts).keys()]) {
			let guess: string = makeGuess(text, attempt);
			if (validateGuess(guess)) return guess;
		}
		return undefined;
	};
}
