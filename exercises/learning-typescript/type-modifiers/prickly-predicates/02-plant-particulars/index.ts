export interface AnyCrop {
	growth: number;
	harvested: boolean;
	name: 'cactus' | 'cassava' | 'chia';
}

// Write your isAnyCrop function here! ✨
// You'll need to export it so the tests can run it.

export function isAnyCrop(data: unknown): data is AnyCrop {
	return (
		!!data &&
		typeof data === 'object' &&
		'growth' in data &&
		typeof data['growth' as keyof typeof data] === 'number' &&
		'harvested' in data &&
		typeof data['harvested' as keyof typeof data] === 'boolean' &&
		'name' in data &&
		['cactus', 'cassava', 'chia'].includes(data['name' as keyof typeof data])
	);
}
