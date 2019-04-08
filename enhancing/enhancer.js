module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	return { ...item };
}

function fail(item) {
	return { ...item };
}

function repair(item) {
	return {
		durability: 100,
		...item
	};
}

function get(item) {
	return { ...item };
}
