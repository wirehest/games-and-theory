// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.

export function pickMany<T, Key extends keyof T>(
	container: T,
	keys: Key[]
): T[Key][] {
	return keys.map((key) => container[key]);
}
