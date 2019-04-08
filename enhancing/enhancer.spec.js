const enhancer = require('./enhancer.js');
// test away!

describe('helpers module', () => {
	describe('repair function', () => {
		const item = { name: 'Sword', durability: 5, enhancement: 2 };
		it('should have 100 durability', () => {
			expect(enhancer.repair(item)).toEqual({ durability: 100, ...item });
		});
	});
});
