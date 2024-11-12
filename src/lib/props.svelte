<script>
	import Button from './button.svelte';
	let count = $state(0);

	function increment() {
		count++;
	}
</script>

<Button onclick={increment}>
	{count}
</Button>

<!-- Props are readonly by default unless you're explicit and make them bindable
since state is deeply reactive -->
