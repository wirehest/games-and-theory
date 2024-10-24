// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};
export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;
export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => void;
	prepare: (recipe: Recipe) => boolean;
};
export type Recipe = (stock: Stock) => RecipeOutcome;
export type RecipeOutcome = { succeeded: boolean; newStock?: Stock };

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	function announce() {
		return `I have ${dirt} much dirt, \
${budget} budget, \
${stock.breads} bread(s), \
${stock.fruits} fruit(s), \
${stock.sauces} sauce(s), and \
${stock.vegetables} vegetable(s).`;
	}

	function clean(time?: number): void {
		dirt = cleaner(dirt, time);
	}

	function purchase(expense: number) {
		if (expense <= budget) {
			let resupply = supplier(expense);
			Object.keys(resupply).forEach((ingredient) => {
				let key = ingredient as keyof typeof stock;
				stock[key] += resupply[key];
			});
			budget -= expense;
			return true;
		}
		return false;
	}

	function prepare(
		recipe: (stock: Stock) => {
			succeeded: boolean;
			newStock?: Stock;
		}
	): boolean {
		if (dirt < 100) {
			dirt++;
			let order = recipe(stock);
			if (order.succeeded) {
				stock = order.newStock ? order.newStock : stock;
			}
			return order.succeeded;
		}
		return false;
	}

	return { announce, clean, purchase, prepare };
}
