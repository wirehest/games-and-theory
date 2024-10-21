// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;
export type NextArea<U> = Catacomb<U> | TunnelSystem<U>;

export interface Catacomb<U> {
	inside: Buried<U>;
	type: 'catacomb';
}

export interface TunnelSystem<U> {
	entrances: Buried<U>[];
	type: 'tunnels';
}

export interface Treasure<U> {
	content: U;
	type: 'treasure';
}

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (data: Content) => data is Fake,
	isReal: (data: Content) => data is Real
) {
	let fake: Fake[] = [];
	let real: Real[] = [];
	let scrap: Content[] = [];

	function recursive(site: Buried<Content>) {
		let collected = collectTreasure(site, isFake, isReal);
		fake.push(...collected.fake);
		real.push(...collected.real);
		scrap.push(...collected.scrap);
	}

	if (Array.isArray(buried)) {
		recursive(buried);
	} else {
		switch (buried.type) {
			case 'catacomb':
				recursive(buried.inside);
				break;
			case 'tunnels':
				for (let entrance of buried.entrances) {
					recursive(entrance);
				}
				break;
			case 'treasure':
				if (isFake(buried.content)) {
					fake.push(buried.content);
				} else if (isReal(buried.content)) {
					real.push(buried.content);
				} else {
					scrap.push(buried.content);
				}

				break;
		}
	}

	return { fake, real, scrap };
}
