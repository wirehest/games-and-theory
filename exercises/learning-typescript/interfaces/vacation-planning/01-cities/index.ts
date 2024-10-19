// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

export type Coordinate = [number, number, number];
export interface Coordinates {
	north: Coordinate;
	west: Coordinate;
}
export interface City {
	catchphrase?: string;
	coordinates: Coordinates;
	name: string;
}

export function describeCity(city: City): string {
	let name = `${city.name}, New York\n`;
	let catchphrase = `* "${city.catchphrase}"\n`;
	let coordinates = `* Located at \
${String(city.coordinates.north[0]).padStart(2, '0')}°\
${String(city.coordinates.north[1]).padStart(2, '0')}'\
${String(city.coordinates.north[2]).padStart(2, '0')}"N \
${String(city.coordinates.west[0]).padStart(2, '0')}°\
${String(city.coordinates.west[1]).padStart(2, '0')}'\
${String(city.coordinates.west[2]).padStart(2, '0')}"W`;

	return city.catchphrase === undefined
		? name + coordinates
		: name + catchphrase + coordinates;
}
