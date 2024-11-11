export function createCounter() {
	let count = $state(0);

	return {
		get count() {
			return count;
		},
		set count(value) {
			count = value;
		}
	};
}

// let counter = createCounter()

// counter.count
// counter.count += 1
// counter.count
