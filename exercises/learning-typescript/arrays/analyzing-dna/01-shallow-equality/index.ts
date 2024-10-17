// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

export type Sequence = string[];

export function shallowEquality(a: Sequence, b: Sequence): boolean {
	return JSON.stringify(a) === JSON.stringify(b);
}
