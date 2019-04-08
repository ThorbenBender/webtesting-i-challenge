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

function fail(item) {
	return { ...item };
}

function repair({ name, durability, enhancement }) {
	return {
		durability: 100,
		name,
		enhancement
	};
}

function get(item) {
	return { ...item };
}
