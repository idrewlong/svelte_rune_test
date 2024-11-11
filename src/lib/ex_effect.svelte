<script>
      let count = $state(0)
      let millis = $state(1000)
      
      // $effect(() => {
      //       console.log(count)
      // })

      $effect(() => {

            // reruns whenever dependency changes 
            const interval = setInterval(() => count++, millis)

            // before each rerun and when component unmounts
            return() => clearInterval(interval)
      })

      
</script>

<div class="flex flex-col space-y-2">
      <h1>{count}</h1>
<button class="bg-indigo-400 px-4 py-2  rounded-sm" onclick={() => (millis *= 2)}>Slower</button>
<button class="bg-green-400 px-4 py-2  rounded-sm" onclick={() => (millis /= 2)}>Faster</button>

</div>