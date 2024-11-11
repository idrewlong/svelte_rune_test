<script>
      import { createCounter } from './counter.svelte.js'

      let counter = createCounter()
</script>

<button class="px-4 py-2 rounded-sm bg-red-400" onclick={() => counter.count += 1}>Click Me: {counter.count}</button>