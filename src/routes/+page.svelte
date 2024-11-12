<script>
	import Reactive from './../lib/reactive.svelte';
	import Array from '$lib/array.svelte';
	import Counter from '$lib/counter.svelte';
	import ExEffect from '$lib/ex_effect.svelte';
	import ExState from '$lib/ex_state.svelte';
	import Shared from '$lib/shared.svelte';
	import Todo from '$lib/todo.svelte';
	import Props from '$lib/props.svelte';
</script>

<div class="flex flex-col justify-center items-center min-h-screen space-y-8">
	<ExState />
	<ExEffect />
	<Counter />
	<Todo />
	<Array />
	<Shared />
	<Reactive />
	<Props />
</div>
