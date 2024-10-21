// Write your pick function here! ✨
// You'll need to export it so the tests can run it.

export function pick<T, Key extends keyof T>(container: T, key: Key): T[Key] {
	return container[key];
}
