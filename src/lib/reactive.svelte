<script>
	import { SvelteURL } from 'svelte/reactivity';

	const url = new SvelteURL('https://joyofcode.xyz/');
</script>

<input bind:value={url.href} />
<input bind:value={url.protocol} />
<input bind:value={url.hostname} />
<input bind:value={url.pathname} />

<!-- // Svelte also provides proxied Map, Set, Date and URL classes which have the
same API as their non-reactive counterparts. // You can use deeply nested
reactivity, or class to avoid boilerplate, but runes are just reactive
primitives which can be used to make a reactivity system. -->
