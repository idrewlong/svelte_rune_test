<script>
	import { preferences } from './shared.svelte.js';

	function toggleTheme() {
		preferences.theme = preferences.theme === 'light' ? 'dark' : 'light';
	}
</script>

<button on:click={toggleTheme}>
	{preferences.theme === 'light' ? '☀️' : '🌙'}
</button>
