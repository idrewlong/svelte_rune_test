<script>
      let todos = $state([])

      function addTodo(event) {
            if (event.key != 'Enter') return

            todos.push({
                  done: false,
                  text: event.target.value
            })
      }
</script>

<input class="text-black" onkeydown={addTodo} placeholder="Add to do"/>

<div class="flex flex-col space-">
{#each todos as todo}
<div class="flex flex-row items-center space-x-2">
<input bind:value={todo.text}/>
<input bind:checked={todo.done} type="checkbox"/>
</div>
{/each}
</div>