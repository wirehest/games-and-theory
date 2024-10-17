// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (char: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
): (text: string) => string {
	return function (text: string) {
		return text
			.split('')
			.map((char) => {
				let charLow = char.toLowerCase();
				if ('aeiou'.includes(charLow)) {
					return onVowel(char);
				} else if ('bcdfghjklmnpqrstvwxyz'.includes(charLow)) {
					return onConsonant(char);
				} else {
					return onPunctuation(char);
				}
			})
			.join('');
	};
}
