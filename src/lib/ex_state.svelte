<script>
      let count = $state(0)
      let double = $derived(count * 2)

      function increment() {
            count += 1
            console.log({count, double})
      }

      
</script>

<div class="flex flex-col">
<button class="bg-slate-400 px-4 py-2  rounded-sm" onclick={increment}>click me!</button>
<p>Main Count: {count}</p>
<p>Count Doubled: {double}</p>
</div>