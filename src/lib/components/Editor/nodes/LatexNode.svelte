<script lang="ts">
  import { onMount, tick } from 'svelte';
  import katex from 'katex';
  import { Calculator, Code, Check, Sparkles, CornerDownLeft } from 'lucide-svelte';

  export let node: any;
  export let updateAttributes: (attrs: any) => void;
  export let selected: boolean = false;

  let latexSource: string = node?.attrs?.latex || 'E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau';
  const displayMode: boolean = true; // Always display block rendering for LatexNode

  let mathContainer: HTMLDivElement;
  let inputElement: HTMLTextAreaElement;
  let isEditing: boolean = true; // Opens automatically when created
  let copied: boolean = false;
  let renderError: string = '';
  let hasError: boolean = false;

  function renderMath() {
    if (!mathContainer) return;
    try {
      renderError = '';
      hasError = false;
      katex.render(latexSource || '\\text{empty}', mathContainer, {
        displayMode: displayMode,
        throwOnError: true
      });
    } catch (e: any) {
      hasError = true;
      renderError = (e.message || 'LaTeX syntax error').replace('KaTeX parse error: ', '');
      try {
        katex.render(latexSource || '', mathContainer, {
          displayMode: displayMode,
          throwOnError: false
        });
      } catch (_) {}
    }
  }

  $: {
    if (latexSource !== undefined) {
      if (updateAttributes) {
        updateAttributes({ latex: latexSource, displayMode: true });
      }
      renderMath();
    }
  }

  onMount(async () => {
    renderMath();
    if (isEditing) {
      await tick();
      if (inputElement) inputElement.focus();
    }
  });

  const mathPresets = [
    { name: 'Schrödinger', latex: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi' },
    { name: 'Mass-Energy', latex: 'E = mc^2' },
    { name: 'Gaussian', latex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}' },
    { name: 'Euler', latex: 'e^{i\\pi} + 1 = 0' },
    { name: 'Quadratic', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' }
  ];

  function setPreset(presetLatex: string) {
    latexSource = presetLatex;
  }

  function copyLatex(e: MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(latexSource);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }

  function handleCardClick(e: MouseEvent) {
    e.stopPropagation();
    if (!isEditing) {
      isEditing = true;
      tick().then(() => {
        if (inputElement) inputElement.focus();
      });
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      finishEditing();
    } else if (e.key === 'Escape') {
      finishEditing();
    }
  }

  function finishEditing() {
    isEditing = false;
  }
</script>

<!-- Interactive LaTeX Display Math Card -->
<div 
  on:click={handleCardClick}
  class="my-6 rounded-2xl border bg-white p-5 shadow-xs transition-all duration-200 cursor-pointer select-none {selected || isEditing ? 'border-[#d96b43] ring-2 ring-[#d96b43]/20' : 'border-[#e6e1da] hover:border-[#d96b43]/50'}"
  contenteditable="false"
  role="button"
  tabindex="0"
>
  <!-- Card Header -->
  <div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-3">
    <div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase">
      <span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">
        <Calculator class="w-4 h-4" />
      </span>
      <span>LaTeX Display Math Block</span>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">KaTeX</span>
    </div>

    <div class="flex items-center gap-2 text-xs">
      <button
        type="button"
        on:click={copyLatex}
        class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
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

  <!-- Live Rendered LaTeX Equation Preview Area -->
  <div class="py-4 px-2 overflow-x-auto flex justify-center text-lg min-h-[64px] items-center transition-colors">
    <div 
      bind:this={mathContainer}
      class="transition-colors duration-150 {hasError ? 'text-rose-600 [&_*]:!text-rose-600 font-semibold' : 'text-[#2c2a29]'}"
    ></div>
  </div>

  <!-- Dropdown Raw LaTeX Editor Panel (Appears Under Text) -->
  {#if isEditing}
    <div 
      on:click={(e) => e.stopPropagation()}
      class="mt-3 rounded-xl border border-[#e6e1da] bg-[#faf8f5] p-4 shadow-xs animate-in fade-in slide-in-from-top-2 duration-150"
    >
      <div class="flex items-center justify-between mb-1.5 text-xs font-semibold text-[#78716c]">
        <label for="raw-latex-input" class="flex items-center gap-1.5">
          <Code class="w-3.5 h-3.5 text-[#d96b43]" />
          <span>Raw LaTeX Input</span>
        </label>
        {#if hasError}
          <span class="text-rose-600 font-medium text-[11px] animate-pulse">Syntax Error</span>
        {:else}
          <span class="text-emerald-600 font-medium text-[11px]">Valid Syntax</span>
        {/if}
      </div>

      <!-- Raw LaTeX Textarea with Event Isolation -->
      <textarea
        id="raw-latex-input"
        bind:this={inputElement}
        bind:value={latexSource}
        on:keydown={handleKeydown}
        on:keyup={(e) => e.stopPropagation()}
        on:keypress={(e) => e.stopPropagation()}
        rows="3"
        class="w-full font-mono text-sm p-3 rounded-lg border bg-white focus:outline-none transition-all text-[#2c2a29] {hasError ? 'border-rose-400 focus:ring-2 focus:ring-rose-400 text-rose-700 bg-rose-50/30' : 'border-[#e6e1da] focus:ring-2 focus:ring-[#d96b43]'}"
        placeholder={'Type raw LaTeX, e.g. \\frac{a}{b}'}
      ></textarea>

      <!-- Live Error Callout -->
      {#if hasError && renderError}
        <div class="mt-2 text-xs font-mono text-rose-600 bg-rose-50 p-2 rounded-md border border-rose-200 flex items-start gap-1.5">
          <span class="font-bold">!</span>
          <span>{renderError}</span>
        </div>
      {/if}

      <!-- Presets & Action Footer -->
      <div class="mt-3 flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-[#e6e1da]">
        <!-- Preset Shortcuts -->
        <div class="flex items-center gap-1.5 flex-wrap text-xs">
          <span class="text-[#78716c] font-medium flex items-center gap-1 mr-1">
            <Sparkles class="w-3 h-3 text-[#d96b43]" />
            Presets:
          </span>
          {#each mathPresets as preset}
            <button
              type="button"
              on:click={(e) => { e.stopPropagation(); setPreset(preset.latex); }}
              class="px-2 py-0.5 rounded-md bg-white hover:bg-[#fdf3ef] hover:text-[#d96b43] border border-[#e6e1da] text-[#78716c] text-[11px] transition-colors"
            >
              {preset.name}
            </button>
          {/each}
        </div>

        <!-- Done Button with Return Arrow Symbol -->
        <button
          type="button"
          on:click={(e) => { e.stopPropagation(); finishEditing(); }}
          class="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#d96b43] hover:bg-[#c85a32] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors ml-auto"
          title="Press Return/Enter to apply"
        >
          <span>Done</span>
          <CornerDownLeft class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  {/if}
</div>
