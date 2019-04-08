const enhancer = require('./enhancer.js');
// test away!

describe('helpers module', () => {
	describe('repair function', () => {
		const item = { name: 'Sword', durability: 5, enhancement: 2 };
		it('should have 100 durability', () => {
			expect(enhancer.repair(item)).toEqual({ durability: 100, name: item.name, enhancement: item.enhancement });
		});
	});
	describe('item enhanced', () => {
		const item = { name: 'Sword', durability: 5, enhancement: 2 };
		it('should have enhancement increased by one', () => {
			expect(enhancer.succeed(item)).toEqual({
				enhancement: ++item.enhancement,
				name: item.name,
				durability: item.durability
			});
		});
	});
	describe('item failed to enhance', () => {
		it('should decrease the durabillity by 5', () => {
			const item = { name: 'Sword', durability: 16, enhancement: 14 };
			expect(enhancer.fail(item)).toEqual({
				durability: item.durability - 5,
				name: item.name,
				enhancement: item.enhancement
			});
		});
		it('should decrease the durability by 10', () => {
			const item = { name: 'Sword', durability: 16, enhancement: 16 };
			expect(enhancer.fail(item)).toEqual({
				durability: item.durability - 10,
				name: item.name,
				enhancement: item.enhancement
			});
		});
		it('should decrease enhancement by 1', () => {
			const item = { name: 'Sword', durability: 16, enhancement: 20 };
			expect(enhancer.fail(item)).toEqual({
				durability: item.durability,
				name: item.name,
				enhancement: item.enhancement - 1
			});
		});
	});
});
