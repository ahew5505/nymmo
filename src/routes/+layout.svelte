<script lang="ts">
  import '../app.css';
  import 'katex/dist/katex.min.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-[#faf8f5] text-[#2c2a29] font-sans antialiased">
  {@render children()}
</div>
