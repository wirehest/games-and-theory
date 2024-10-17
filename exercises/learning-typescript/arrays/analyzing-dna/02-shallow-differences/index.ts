// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export type Sequence = string[];

export function shallowDifferences(
	a: Sequence,
	b: Sequence
): (string | undefined)[] | undefined {
	if (a.length !== b.length) return undefined;
	return [...Array(a.length).keys()].map((i) => {
		return a[i] === b[i] ? a[i] : undefined;
	});
}
