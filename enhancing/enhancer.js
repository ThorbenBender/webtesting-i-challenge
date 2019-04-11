module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed({ name, durability, enhancement }) {
	return {
		name,
		durability,
		enhancement: ++enhancement
	};
}

function fail({ name, durability, enhancement }) {
	if (enhancement < 15) {
		return {
			enhancement,
			name,
			durability: durability - 5
		};
	}
	if (enhancement >= 15 && enhancement < 17) {
		return {
			enhancement,
			name,
			durability: durability - 10
		};
	}
	if (enhancement > 16) {
		return {
			enhancement: enhancement - 1,
			name,
			durability
		};
	}
}

function repair({ name, durability, enhancement }) {
	if (enhancement === 20) {
		return {
			name,
			durability,
			enhancement
		};
	} else {
		return {
			durability: 100,
			name,
			enhancement
		};
	}
}

function get(item) {
	return { ...item };
}
