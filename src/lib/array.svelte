<script>
	let numbers = $state([1, 2, 3, 4]);
	let total = $derived(numbers.reduce((t, n) => t + n));

	function add() {
		//old way of doing it.Deeply reactivity you don't need reactive assignments for objects and arrays.
		// numbers = [...numbers, numbers.length + 1];
		numbers.push(numbers.length + 1);
	}
</script>

<button class="bg-slate-800 rounded-sm text-white px-2" onclick={add}
	>{total}
</button>
