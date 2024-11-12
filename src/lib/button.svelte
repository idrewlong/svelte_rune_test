<!-- button.svelte -->
<script>
      let { children, class: className, ...rest } = $props();
  </script>
  
  <button 
      class="btn {className ?? ''}" 
      {...rest}
    
  >
      {@render children()}
  </button>