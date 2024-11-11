<script>
import Counter from "$lib/counter.svelte";
import ExEffect from "$lib/ex_effect.svelte";
import ExState from "$lib/ex_state.svelte";
import Todo from "$lib/todo.svelte";
</script>

<div class="flex flex-col justify-center items-center min-h-screen space-y-8">
<ExState/>
<ExEffect/>
<Counter/>
<Todo/>
</div>

