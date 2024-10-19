// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

export interface BaseLandmark {
	name: string;
}

export interface Fort extends BaseLandmark {
	type: 'fort';
}

export interface Lake extends BaseLandmark {
	type: 'lake';
	miles: number;
}

export interface Lighthouse extends BaseLandmark {
	type: 'lighthouse';
	height: number;
	lit: number;
}

export interface Mountain extends BaseLandmark {
	type: 'mountain';
	height: number;
}

export interface Park extends BaseLandmark {
	type: 'park';
	acres: number;
}

export interface River extends BaseLandmark {
	type: 'river';
	length: number;
	depth: number;
}

export interface Waterfall extends BaseLandmark {
	type: 'waterfall';
	height: number;
}

export type Landmark =
	| Fort
	| Lake
	| Lighthouse
	| Mountain
	| Park
	| River
	| Waterfall;

export function describeLandmark(landmark: Landmark): string {
	let line1 = `${landmark.name} is a ${landmark.type} in Upstate New York.`;
	let line2 = '';

	switch (landmark.type) {
		case 'fort':
			break;
		case 'lake':
			line2 = `\nIt covers ${landmark.miles} square miles of water.`;
			break;
		case 'lighthouse':
			line2 = `\nIt was first lit in ${landmark.lit} and is \
${landmark.height} feet high.`;
			break;
		case 'mountain':
			line2 = `\nIts peak is ${landmark.height} feet high.`;
			break;
		case 'park':
			line2 = `\nIt covers ${landmark.acres} square acres.`;
			break;
		case 'river':
			line2 = `\nIt flows for ${landmark.length} miles and is \
${landmark.depth} feet deep at its deepest.`;
			break;
		case 'waterfall':
			line2 = `\nIt is ${landmark.height} feet high.`;
			break;
	}

	return line1 + line2;
}
