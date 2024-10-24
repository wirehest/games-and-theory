// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurants {
	city: string;
	name: string;
}

interface Grouped {
	[name: string]: string[];
}

export function groupRestaurants(restaurants: Restaurants[]): Grouped {
	let grouped: Grouped = {};
	restaurants.forEach((restaurant) => {
		if (grouped.hasOwnProperty(restaurant.city)) {
			grouped[restaurant.city].push(restaurant.name);
		} else {
			grouped[restaurant.city] = [restaurant.name];
		}
	});

	return grouped;
}
