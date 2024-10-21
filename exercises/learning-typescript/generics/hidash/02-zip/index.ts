// Write your zip function here! ✨
// You'll need to export it so the tests can run it.

export function zip<T, U>(a: T[], b: U[]): (T | U)[] {
	let shorterArray = a.length < b.length ? a : b;
	let longerArray = shorterArray === a ? b : a;
	let zipped: (T | U)[] = [];

	for (let i = 0; i < shorterArray.length; i++) {
		zipped.push(a[i], b[i]);
	}

	return zipped.concat(longerArray.slice(shorterArray.length));
}
