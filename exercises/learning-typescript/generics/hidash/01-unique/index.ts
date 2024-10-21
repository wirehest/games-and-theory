// Write your unique function here! ✨
// You'll need to export it so the tests can run it.

export function unique<T>(...items: T[][]): T[] {
	return [...new Set<T>(items.flatMap((subarray) => subarray))];
}
