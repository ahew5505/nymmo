<script lang="ts">
  import { onMount } from 'svelte';
  import { loadRDKitWasm, generateMockMolSVG } from '../../../engines/wasmLoader';
  import { FlaskConical, RefreshCw, Sparkles, Check } from 'lucide-svelte';

  export let node: any;
  export let updateAttributes: (attrs: any) => void;
  export let selected: boolean = false;

  let smiles: string = node?.attrs?.smiles || 'c1ccccc1';
  let svgContent: string = '';
  let isEditing: boolean = false;
  let copied: boolean = false;
  let rdkitEngine: any = null;

  async function updateStructure() {
    if (!rdkitEngine) {
      rdkitEngine = await loadRDKitWasm();
    }
    if (rdkitEngine && rdkitEngine.get_mol) {
      try {
        const mol = rdkitEngine.get_mol(smiles);
        if (mol && mol.get_svg) {
          svgContent = mol.get_svg();
          mol.delete();
          return;
        }
      } catch (e) {
        // Fallback to vector SVG
      }
    }
    svgContent = generateMockMolSVG(smiles);
  }

  $: {
    if (smiles !== undefined) {
      if (updateAttributes) updateAttributes({ smiles });
      updateStructure();
    }
  }

  onMount(() => {
    updateStructure();
  });

  const presets = [
    { label: 'Benzene (C₆H₆)', smiles: 'c1ccccc1' },
    { label: 'Aspirin', smiles: 'CC(=O)Oc1ccccc1C(=O)O' },
    { label: 'Ethanol (C₂H₅OH)', smiles: 'CCO' }
  ];

  function setPreset(pSmiles: string) {
    smiles = pSmiles;
  }

  function copySmiles() {
    navigator.clipboard.writeText(smiles);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<div 
  class="my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 {selected ? 'ring-2 ring-[#d96b43] border-transparent' : ''}"
  contenteditable="false"
>
  <!-- Header -->
  <div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none">
    <div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase">
      <span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">
        <FlaskConical class="w-4 h-4" />
      </span>
      <span>RDKit Chemistry Node</span>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">WebAssembly</span>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <button 
        type="button"
        on:click={() => (isEditing = !isEditing)}
        class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
      >
        <Sparkles class="w-3.5 h-3.5" />
        {isEditing ? 'Hide Formula' : 'Edit Structure'}
      </button>
      <button
        type="button"
        on:click={copySmiles}
        class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
      >
        {#if copied}
          <Check class="w-3.5 h-3.5 text-emerald-600" />
          <span class="text-emerald-600">Copied</span>
        {:else}
          <span>SMILES</span>
        {/if}
      </button>
    </div>
  </div>

  <!-- Chemical Structure Display -->
  <div class="py-4 flex flex-col items-center justify-center min-h-[160px]">
    {@html svgContent}
    <div class="mt-2 text-xs font-mono text-[#78716c] bg-[#faf8f5] px-3 py-1 rounded-md border border-[#e6e1da]">
      SMILES: <span class="text-[#2c2a29] font-medium">{smiles}</span>
    </div>
  </div>

  <!-- Interactive Controls & Preset Selector -->
  {#if isEditing}
    <div class="mt-4 pt-3 border-t border-[#f3efea]">
      <label for="smiles-input" class="block text-xs font-medium text-[#78716c] mb-1.5">SMILES Molecular Formula String</label>
      <div class="flex gap-2 mb-3">
        <input
          id="smiles-input"
          type="text"
          bind:value={smiles}
          class="flex-1 font-mono text-sm px-3 py-2 rounded-lg border border-[#e6e1da] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#d96b43] text-[#2c2a29]"
          placeholder="e.g. c1ccccc1"
        />
        <button
          type="button"
          on:click={updateStructure}
          class="px-3 py-2 bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] rounded-lg flex items-center gap-1 text-xs font-medium"
        >
          <RefreshCw class="w-3.5 h-3.5" />
          Render
        </button>
      </div>

      <!-- Presets -->
      <div class="flex items-center gap-2 flex-wrap text-xs">
        <span class="text-[#78716c] font-medium">Quick Presets:</span>
        {#each presets as preset}
          <button
            type="button"
            on:click={() => setPreset(preset.smiles)}
            class="px-2.5 py-1 rounded-md bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] border border-[#e6e1da] transition-colors"
          >
            {preset.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
