<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Editor } from '@tiptap/core';
  import { 
    Bold, Italic, Heading1, Heading2, List, ListOrdered, 
    Quote, Undo, Redo, Calculator, FlaskConical, 
    Workflow, Sparkles, Code
  } from 'lucide-svelte';

  export let editor: Editor | null = null;
  export let slashActive: boolean = false;
  export let slashPosition: { top: number; left: number } = { top: 0, left: 0 };
  export let onSelectSlashItem: (command: string) => void;

  // Active state trackers
  let isBold: boolean = false;
  let isItalic: boolean = false;
  let isH1: boolean = false;
  let isH2: boolean = false;
  let isBulletList: boolean = false;
  let isOrderedList: boolean = false;
  let isBlockquote: boolean = false;
  let isCode: boolean = false;
  let canUndo: boolean = false;
  let canRedo: boolean = false;

  function updateActiveStates() {
    if (!editor) return;
    isBold = editor.isActive('bold');
    isItalic = editor.isActive('italic');
    isH1 = editor.isActive('heading', { level: 1 });
    isH2 = editor.isActive('heading', { level: 2 });
    isBulletList = editor.isActive('bulletList');
    isOrderedList = editor.isActive('orderedList');
    isBlockquote = editor.isActive('blockquote');
    isCode = editor.isActive('code');
    canUndo = editor.can().chain().focus().undo().run();
    canRedo = editor.can().chain().focus().redo().run();
  }

  // Subscribe to editor events when editor is set or updated
  $: if (editor) {
    updateActiveStates();
    editor.on('transaction', updateActiveStates);
    editor.on('selectionUpdate', updateActiveStates);
    editor.on('update', updateActiveStates);
    editor.on('focus', updateActiveStates);
  }

  onDestroy(() => {
    if (editor) {
      editor.off('transaction', updateActiveStates);
      editor.off('selectionUpdate', updateActiveStates);
      editor.off('update', updateActiveStates);
      editor.off('focus', updateActiveStates);
    }
  });

  // Formatting Action Handlers with Focus Retention
  function handleToggleBold(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleBold().run();
    updateActiveStates();
  }

  function handleToggleItalic(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleItalic().run();
    updateActiveStates();
  }

  function handleToggleHeading1(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleHeading({ level: 1 }).run();
    updateActiveStates();
  }

  function handleToggleHeading2(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleHeading({ level: 2 }).run();
    updateActiveStates();
  }

  function handleToggleBulletList(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleBulletList().run();
    updateActiveStates();
  }

  function handleToggleOrderedList(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleOrderedList().run();
    updateActiveStates();
  }

  function handleToggleBlockquote(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleBlockquote().run();
    updateActiveStates();
  }

  function handleToggleCode(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().toggleCode().run();
    updateActiveStates();
  }

  function handleUndo(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().undo().run();
    updateActiveStates();
  }

  function handleRedo(e: MouseEvent) {
    e.preventDefault();
    if (!editor) return;
    editor.chain().focus().redo().run();
    updateActiveStates();
  }

  const slashCommands = [
    {
      id: 'latex',
      title: '/latex',
      subtitle: 'LaTeX Math Equation (KaTeX)',
      icon: Calculator,
      badge: 'KaTeX'
    },
    {
      id: 'chemistry',
      title: '/chemistry',
      subtitle: 'RDKit Chemical Structure (2D/WASM)',
      icon: FlaskConical,
      badge: 'RDKit'
    },
    {
      id: 'diagram',
      title: '/diagram',
      subtitle: 'Mermaid Vector Flowchart/Sequence',
      icon: Workflow,
      badge: 'Mermaid'
    },
    {
      id: 'h1',
      title: '/h1',
      subtitle: 'Heading Level 1',
      icon: Heading1,
      badge: 'Format'
    },
    {
      id: 'h2',
      title: '/h2',
      subtitle: 'Heading Level 2',
      icon: Heading2,
      badge: 'Format'
    },
    {
      id: 'quote',
      title: '/quote',
      subtitle: 'Academic Blockquote',
      icon: Quote,
      badge: 'Format'
    }
  ];
</script>

<!-- Floating Glass Formatting MenuBar -->
<header class="sticky top-4 z-30 mx-auto max-w-4xl px-4 select-none">
  <div class="flex items-center justify-between gap-1.5 rounded-2xl border border-[#e6e1da] bg-white/95 p-2 shadow-sm backdrop-blur-md transition-all">
    {#if editor}
      <!-- Text Formatting Group -->
      <div class="flex items-center gap-1">
        <button
          type="button"
          on:mousedown={handleToggleBold}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isBold ? 'bg-[#fdf3ef] text-[#d96b43] font-bold shadow-2xs' : ''}"
          title="Bold (Ctrl+B)"
        >
          <Bold class="w-4 h-4" />
        </button>

        <button
          type="button"
          on:mousedown={handleToggleItalic}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isItalic ? 'bg-[#fdf3ef] text-[#d96b43] shadow-2xs' : ''}"
          title="Italic (Ctrl+I)"
        >
          <Italic class="w-4 h-4" />
        </button>

        <button
          type="button"
          on:mousedown={handleToggleCode}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isCode ? 'bg-[#fdf3ef] text-[#d96b43] shadow-2xs' : ''}"
          title="Inline Code"
        >
          <Code class="w-4 h-4" />
        </button>

        <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div>

        <button
          type="button"
          on:mousedown={handleToggleHeading1}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isH1 ? 'bg-[#fdf3ef] text-[#d96b43] font-bold shadow-2xs' : ''}"
          title="Heading 1"
        >
          <Heading1 class="w-4 h-4" />
        </button>

        <button
          type="button"
          on:mousedown={handleToggleHeading2}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isH2 ? 'bg-[#fdf3ef] text-[#d96b43] font-bold shadow-2xs' : ''}"
          title="Heading 2"
        >
          <Heading2 class="w-4 h-4" />
        </button>

        <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div>

        <button
          type="button"
          on:mousedown={handleToggleBulletList}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isBulletList ? 'bg-[#fdf3ef] text-[#d96b43] shadow-2xs' : ''}"
          title="Bullet List"
        >
          <List class="w-4 h-4" />
        </button>

        <button
          type="button"
          on:mousedown={handleToggleOrderedList}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isOrderedList ? 'bg-[#fdf3ef] text-[#d96b43] shadow-2xs' : ''}"
          title="Numbered List"
        >
          <ListOrdered class="w-4 h-4" />
        </button>

        <button
          type="button"
          on:mousedown={handleToggleBlockquote}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors {isBlockquote ? 'bg-[#fdf3ef] text-[#d96b43] shadow-2xs' : ''}"
          title="Quote"
        >
          <Quote class="w-4 h-4" />
        </button>
      </div>

      <!-- Academic Custom Node Inserter Buttons -->
      <div class="flex items-center gap-1">
        <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div>

        <button
          type="button"
          on:mousedown={(e) => { e.preventDefault(); onSelectSlashItem('latex'); }}
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all"
        >
          <Calculator class="w-3.5 h-3.5 text-[#d96b43]" />
          <span>+ Math</span>
        </button>

        <button
          type="button"
          on:mousedown={(e) => { e.preventDefault(); onSelectSlashItem('chemistry'); }}
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all"
        >
          <FlaskConical class="w-3.5 h-3.5 text-[#d96b43]" />
          <span>+ Chem</span>
        </button>

        <button
          type="button"
          on:mousedown={(e) => { e.preventDefault(); onSelectSlashItem('diagram'); }}
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all"
        >
          <Workflow class="w-3.5 h-3.5 text-[#d96b43]" />
          <span>+ Diagram</span>
        </button>
      </div>

      <!-- Undo / Redo Actions -->
      <div class="flex items-center gap-1">
        <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div>
        <button
          type="button"
          on:mousedown={handleUndo}
          disabled={!canUndo}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Undo"
        >
          <Undo class="w-4 h-4" />
        </button>
        <button
          type="button"
          on:mousedown={handleRedo}
          disabled={!canRedo}
          class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Redo"
        >
          <Redo class="w-4 h-4" />
        </button>
      </div>
    {/if}
  </div>
</header>

<!-- Floating Contextual Slash Menu Palette -->
{#if slashActive}
  <div 
    class="fixed z-50 w-72 rounded-2xl border border-[#e6e1da] bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100"
    style="top: {slashPosition.top}px; left: {slashPosition.left}px;"
  >
    <div class="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78716c] flex items-center gap-1">
      <Sparkles class="w-3 h-3 text-[#d96b43]" />
      <span>Insert Academic Block</span>
    </div>
    <div class="space-y-1 mt-1">
      {#each slashCommands as item}
        <button
          type="button"
          on:mousedown={(e) => { e.preventDefault(); onSelectSlashItem(item.id); }}
          class="w-full flex items-center justify-between p-2 rounded-xl text-left hover:bg-[#fdf3ef] group transition-colors"
        >
          <div class="flex items-center gap-2.5">
            <span class="p-1.5 rounded-lg bg-[#faf8f5] group-hover:bg-white text-[#78716c] group-hover:text-[#d96b43] border border-[#e6e1da] transition-colors">
              <svelte:component this={item.icon} class="w-4 h-4" />
            </span>
            <div>
              <div class="text-xs font-semibold text-[#2c2a29] group-hover:text-[#d96b43]">{item.title}</div>
              <div class="text-[11px] text-[#78716c]">{item.subtitle}</div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">{item.badge}</span>
        </button>
      {/each}
    </div>
  </div>
{/if}
