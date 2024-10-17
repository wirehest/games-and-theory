// Write your deepEquality function here! ✨

export type SequenceArrays = string[][];

export function deepEquality(a: SequenceArrays, b: SequenceArrays): boolean {
	return JSON.stringify(a) === JSON.stringify(b);
}
