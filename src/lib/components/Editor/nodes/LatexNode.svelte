<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  import { Calculator, Code, Check } from 'lucide-svelte';

  export let node: any;
  export let updateAttributes: (attrs: any) => void;
  export let selected: boolean = false;

  let latexSource: string = node?.attrs?.latex || 'E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau';
  let mathContainer: HTMLDivElement;
  let isEditing: boolean = false;
  let copied: boolean = false;
  let renderError: string = '';

  function renderMath() {
    if (!mathContainer) return;
    try {
      renderError = '';
      katex.render(latexSource, mathContainer, {
        displayMode: true,
        throwOnError: false
      });
    } catch (e: any) {
      renderError = e.message || 'KaTeX render error';
    }
  }

  $: {
    if (latexSource !== undefined) {
      if (updateAttributes) updateAttributes({ latex: latexSource });
      renderMath();
    }
  }

  onMount(() => {
    renderMath();
  });

  function copyLatex() {
    navigator.clipboard.writeText(latexSource);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<div 
  class="my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 {selected ? 'ring-2 ring-[#d96b43] border-transparent' : ''}"
  contenteditable="false"
>
  <!-- Node Header -->
  <div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none">
    <div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase">
      <span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">
        <Calculator class="w-4 h-4" />
      </span>
      <span>LaTeX Math Block</span>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">KaTeX</span>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <button 
        type="button"
        on:click={() => (isEditing = !isEditing)}
        class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
      >
        <Code class="w-3.5 h-3.5" />
        {isEditing ? 'Hide Source' : 'Edit Equation'}
      </button>
      <button
        type="button"
        on:click={copyLatex}
        class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
      >
        {#if copied}
          <Check class="w-3.5 h-3.5 text-emerald-600" />
          <span class="text-emerald-600">Copied</span>
        {:else}
          <span>Copy</span>
        {/if}
      </button>
    </div>
  </div>

  <!-- Rendered Math Output -->
  <div class="py-4 px-2 overflow-x-auto flex justify-center text-lg min-h-[60px] items-center">
    <div bind:this={mathContainer}></div>
    {#if renderError}
      <div class="text-xs text-rose-500 font-mono">{renderError}</div>
    {/if}
  </div>

  <!-- Code Editor Panel (Collapsible) -->
  {#if isEditing}
    <div class="mt-4 pt-3 border-t border-[#f3efea]">
      <label for="latex-code-input" class="block text-xs font-medium text-[#78716c] mb-1.5">LaTeX Expression String</label>
      <textarea
        id="latex-code-input"
        bind:value={latexSource}
        rows="3"
        class="w-full font-mono text-sm p-3 rounded-lg border border-[#e6e1da] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#d96b43] focus:border-transparent text-[#2c2a29]"
        placeholder="\hat{H} \psi = E \psi"
      ></textarea>
      <div class="mt-2 flex items-center justify-between text-xs text-[#78716c]">
        <span>Supports full KaTeX macro expansion & AMS math symbols.</span>
        <button 
          type="button"
          on:click={() => (isEditing = false)}
          class="px-3 py-1 bg-[#d96b43] hover:bg-[#c85a32] text-white rounded-md transition-colors font-medium"
        >
          Done Editing
        </button>
      </div>
    </div>
  {/if}
</div>
