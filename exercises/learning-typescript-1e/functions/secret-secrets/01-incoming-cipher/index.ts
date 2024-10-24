// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (char: string) => string;
export function createCipher(cipher: Cipher): (text: string) => string {
	return function (text: string) {
		return text
			.split('')
			.map((char) => cipher(char))
			.join('');
	};
}
