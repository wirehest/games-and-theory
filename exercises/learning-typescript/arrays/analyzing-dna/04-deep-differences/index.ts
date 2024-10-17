// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export type SequenceArray = string[][];
export type DiffResult = ((string | undefined)[] | undefined)[];

export function deepDifferences(
	a: SequenceArray,
	b: SequenceArray
): DiffResult {
	let longest = Math.max(a.length, b.length);
	return [...Array(longest).keys()].map((i) => {
		if (a[i]?.length !== b[i]?.length) return undefined;
		return [...Array(a[i].length).keys()].map((j) => {
			if (a[i][j] !== b[i][j]) return undefined;
			return a[i][j];
		});
	});
}
