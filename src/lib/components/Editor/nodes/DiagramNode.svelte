<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';
  import { Workflow, Code, Check } from 'lucide-svelte';

  export let node: any;
  export let updateAttributes: (attrs: any) => void;
  export let selected: boolean = false;

  let diagramCode: string = node?.attrs?.code || `graph LR
    A[Reactant A] --> B(Intermediate Complex)
    B -->|Catalyst Catalyst_X| C[Benzene Derivative]
    B --> D[Side Product]`;

  let diagramContainer: HTMLDivElement;
  let isEditing: boolean = false;
  let renderError: string = '';
  let svgOutput: string = '';
  let id = 'mermaid_' + Math.random().toString(36).substr(2, 9);

  async function renderDiagram() {
    try {
      renderError = '';
      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        themeVariables: {
          primaryColor: '#fdf3ef',
          primaryBorderColor: '#d96b43',
          lineColor: '#78716c',
          textColor: '#2c2a29'
        }
      });
      const { svg } = await mermaid.render(id, diagramCode);
      svgOutput = svg;
    } catch (e: any) {
      renderError = e.message || 'Mermaid diagram syntax error';
    }
  }

  $: {
    if (diagramCode !== undefined) {
      if (updateAttributes) updateAttributes({ code: diagramCode });
      renderDiagram();
    }
  }

  onMount(() => {
    renderDiagram();
  });
</script>

<div 
  class="my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 {selected ? 'ring-2 ring-[#d96b43] border-transparent' : ''}"
  contenteditable="false"
>
  <!-- Header -->
  <div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none">
    <div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase">
      <span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">
        <Workflow class="w-4 h-4" />
      </span>
      <span>Mermaid Vector Diagram</span>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">Mermaid.js</span>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <button 
        type="button"
        on:click={() => (isEditing = !isEditing)}
        class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors"
      >
        <Code class="w-3.5 h-3.5" />
        {isEditing ? 'Hide Source' : 'Edit Diagram'}
      </button>
    </div>
  </div>

  <!-- Rendered Vector Output -->
  <div class="py-4 flex justify-center items-center min-h-[140px] overflow-x-auto">
    {#if svgOutput}
      {@html svgOutput}
    {:else if renderError}
      <div class="text-xs text-rose-500 font-mono p-3 bg-rose-50 rounded-lg">{renderError}</div>
    {/if}
  </div>

  <!-- Code Editor Panel -->
  {#if isEditing}
    <div class="mt-4 pt-3 border-t border-[#f3efea]">
      <label for="mermaid-code-input" class="block text-xs font-medium text-[#78716c] mb-1.5">Mermaid Diagram Source Code</label>
      <textarea
        id="mermaid-code-input"
        bind:value={diagramCode}
        rows="5"
        class="w-full font-mono text-sm p-3 rounded-lg border border-[#e6e1da] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#d96b43] text-[#2c2a29]"
      ></textarea>
      <div class="mt-2 flex items-center justify-between text-xs text-[#78716c]">
        <span>Supports flowcharts, sequence diagrams, state diagrams, and gantt charts.</span>
        <button 
          type="button"
          on:click={() => (isEditing = false)}
          class="px-3 py-1 bg-[#d96b43] hover:bg-[#c85a32] text-white rounded-md transition-colors font-medium"
        >
          Apply Changes
        </button>
      </div>
    </div>
  {/if}
</div>
