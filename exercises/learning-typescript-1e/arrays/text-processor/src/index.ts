// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type Texts = string[];
export type Options = {
	align?: 'left' | 'middle' | 'right';
	width: number;
};
export type AlignTextsOutput = string[][];

export function alignTexts(texts: Texts, options: Options): AlignTextsOutput {
	if (options?.align === undefined) options.align = 'left';

	let allProcessed = [];
	for (let line of texts) {
		let words = line.split(' ').reverse();
		let processed = [];

		while (words.length > 0) {
			let topWord = words.pop();

			if (`${topWord} ${words.at(-1)}`.length > options.width) {
				processed.push(addPad(topWord, options));
				continue;
			}

			let nextString = `${topWord} ${words.pop()}`;
			processed.push(addPad(nextString, options));
		}

		allProcessed.push(processed);
	}

	return allProcessed;
}

function addPad(str: string | undefined, options: Options): string {
	if (str === undefined) throw new Error('expect string');

	switch (options.align) {
		case 'left':
			str = str.padEnd(options.width, ' ');
			break;
		case 'right':
			str = str.padStart(options.width, ' ');
			break;
		case 'middle':
			let firstPad = (options.width - str.length) / 2 + str.length;
			str = str.padStart(firstPad, ' ').padEnd(options.width, ' ');
			break;
	}

	return str;
}
