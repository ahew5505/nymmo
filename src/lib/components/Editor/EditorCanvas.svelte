<script lang="ts">
  import { onMount, onDestroy, mount, unmount } from 'svelte';
  import { Editor, Node } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';

  import MenuBar from './MenuBar.svelte';
  import LatexNodeComponent from './nodes/LatexNode.svelte';
  import LatexInlineNodeComponent from './nodes/LatexInlineNode.svelte';
  import RdkitNodeComponent from './nodes/RdkitNode.svelte';
  import DiagramNodeComponent from './nodes/DiagramNode.svelte';
  import { getDatabase } from '../../db/rxdb';

  let { 
    docId = 'doc_benzene_synthesis', 
    onSaveStatusChange = undefined 
  }: { 
    docId?: string; 
    onSaveStatusChange?: (status: string) => void 
  } = $props();

  let element: HTMLDivElement;
  let editor = $state<Editor | null>(null);
  let slashActive = $state<boolean>(false);
  let slashPosition = $state<{ top: number; left: number }>({ top: 0, left: 0 });
  let db: any = null;

  // Custom TipTap Extension: LatexNode (Display Block Math)
  const LatexNode = Node.create({
    name: 'latexNode',
    group: 'block',
    atom: true,
    addAttributes() {
      return {
        latex: { default: 'E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau' },
        displayMode: { default: true }
      };
    },
    parseHTML() {
      return [{ tag: 'div[data-type="latex-node"]' }];
    },
    renderHTML({ HTMLAttributes }) {
      return ['div', { 'data-type': 'latex-node', ...HTMLAttributes }];
    },
    addNodeView() {
      return ({ node, getPos, editor }) => {
        const dom = document.createElement('div');
        const comp = mount(LatexNodeComponent as any, {
          target: dom,
          props: {
            node,
            selected: false,
            updateAttributes: (attrs: any) => {
              if (typeof getPos === 'function') {
                editor.commands.updateAttributes('latexNode', attrs);
              }
            }
          }
        });
        return {
          dom,
          stopEvent: (event: Event) => {
            const target = event.target as HTMLElement;
            return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || !!target.closest('button, input, textarea'));
          },
          destroy: () => unmount(comp)
        };
      };
    }
  });

  // Custom TipTap Extension: LatexInlineNode (Inline Math)
  const LatexInlineNode = Node.create({
    name: 'latexInlineNode',
    group: 'inline',
    inline: true,
    atom: true,
    addAttributes() {
      return {
        latex: { default: '\\psi_i(x)' }
      };
    },
    parseHTML() {
      return [{ tag: 'span[data-type="latex-inline-node"]' }];
    },
    renderHTML({ HTMLAttributes }) {
      return ['span', { 'data-type': 'latex-inline-node', ...HTMLAttributes }];
    },
    addNodeView() {
      return ({ node, getPos, editor }) => {
        const dom = document.createElement('span');
        dom.style.display = 'inline-block';
        const comp = mount(LatexInlineNodeComponent as any, {
          target: dom,
          props: {
            node,
            selected: false,
            updateAttributes: (attrs: any) => {
              if (typeof getPos === 'function') {
                editor.commands.updateAttributes('latexInlineNode', attrs);
              }
            }
          }
        });
        return {
          dom,
          stopEvent: (event: Event) => {
            const target = event.target as HTMLElement;
            return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || !!target.closest('button, input, textarea'));
          },
          destroy: () => unmount(comp)
        };
      };
    }
  });

  // Custom TipTap Extension: RdkitNode
  const RdkitNode = Node.create({
    name: 'rdkitNode',
    group: 'block',
    atom: true,
    addAttributes() {
      return {
        smiles: { default: 'c1ccccc1' }
      };
    },
    parseHTML() {
      return [{ tag: 'div[data-type="rdkit-node"]' }];
    },
    renderHTML({ HTMLAttributes }) {
      return ['div', { 'data-type': 'rdkit-node', ...HTMLAttributes }];
    },
    addNodeView() {
      return ({ node, getPos, editor }) => {
        const dom = document.createElement('div');
        const comp = mount(RdkitNodeComponent as any, {
          target: dom,
          props: {
            node,
            selected: false,
            updateAttributes: (attrs: any) => {
              if (typeof getPos === 'function') {
                editor.commands.updateAttributes('rdkitNode', attrs);
              }
            }
          }
        });
        return {
          dom,
          stopEvent: (event: Event) => {
            const target = event.target as HTMLElement;
            return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || !!target.closest('button, input, textarea'));
          },
          destroy: () => unmount(comp)
        };
      };
    }
  });

  // Custom TipTap Extension: DiagramNode
  const DiagramNode = Node.create({
    name: 'diagramNode',
    group: 'block',
    atom: true,
    addAttributes() {
      return {
        code: {
          default: `graph LR\n  A[Reactant A] --> B(Intermediate Complex)\n  B -->|Catalyst X| C[Benzene Derivative]`
        }
      };
    },
    parseHTML() {
      return [{ tag: 'div[data-type="diagram-node"]' }];
    },
    renderHTML({ HTMLAttributes }) {
      return ['div', { 'data-type': 'diagram-node', ...HTMLAttributes }];
    },
    addNodeView() {
      return ({ node, getPos, editor }) => {
        const dom = document.createElement('div');
        const comp = mount(DiagramNodeComponent as any, {
          target: dom,
          props: {
            node,
            selected: false,
            updateAttributes: (attrs: any) => {
              if (typeof getPos === 'function') {
                editor.commands.updateAttributes('diagramNode', attrs);
              }
            }
          }
        });
        return {
          dom,
          stopEvent: (event: Event) => {
            const target = event.target as HTMLElement;
            return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || !!target.closest('button, input, textarea'));
          },
          destroy: () => unmount(comp)
        };
      };
    }
  });

  onMount(async () => {
    // Initialize RxDB database
    try {
      db = await getDatabase();
    } catch (err) {
      console.warn('RxDB storage init warning:', err);
    }

    // Initialize TipTap Instance
    editor = new Editor({
      element,
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [1, 2, 3]
          }
        }),
        LatexNode,
        LatexInlineNode,
        RdkitNode,
        DiagramNode
      ],
      content: `
        <h1>3.2 Quantum Chemistry & Aromaticity</h1>
        <p>In quantum mechanics, <strong>molecular orbital theory</strong> describes the electronic structure of wavefunctions.</p>
        <div data-type="latex-node" latex="E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau"></div>
        <h2>Benzene Molecular Structure</h2>
        <div data-type="rdkit-node" smiles="c1ccccc1"></div>
        <h2>Reaction Kinetics Workflow</h2>
        <div data-type="diagram-node"></div>
      `,
      editorProps: {
        attributes: {
          class: 'prose max-w-none focus:outline-none min-h-[450px] leading-relaxed'
        },
        handleKeyDown(view, event) {
          if (event.key === '/') {
            const { from } = view.state.selection;
            const coords = view.coordsAtPos(from);
            slashPosition = {
              top: coords.bottom + window.scrollY + 6,
              left: Math.max(16, coords.left + window.scrollX - 20)
            };
            slashActive = true;
          } else if (event.key === 'Escape') {
            slashActive = false;
          }
          return false;
        }
      },
      onUpdate({ editor }) {
        if (onSaveStatusChange) onSaveStatusChange('Saving to RxDB...');
        saveToRxDB(editor.getJSON());
      }
    });
  });

  let saveTimeout: any;
  async function saveToRxDB(jsonContent: any) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
      if (db && db.courses) {
        try {
          await db.courses.upsert({
            id: docId,
            title: 'Benzene Molecular Structure & Quantum Orbital Energy',
            code: 'CHEM-402',
            updatedAt: Date.now(),
            content: jsonContent,
            isOfflineSynced: true
          });
          if (onSaveStatusChange) onSaveStatusChange('Offline Ready (RxDB Synced)');
        } catch (e) {
          console.warn('RxDB save error:', e);
          if (onSaveStatusChange) onSaveStatusChange('Local Cache Active');
        }
      } else {
        if (onSaveStatusChange) onSaveStatusChange('Offline Ready (Local)');
      }
    }, 600);
  }

  function handleSelectSlashItem(command: string) {
    slashActive = false;
    if (!editor) return;

    // Clean up slash character if inserted
    const { from } = editor.state.selection;
    const textBefore = editor.state.doc.textBetween(Math.max(0, from - 1), from);
    if (textBefore === '/') {
      editor.chain().focus().deleteRange({ from: from - 1, to: from }).run();
    }

    if (command === 'latex-block') {
      editor.chain().focus().insertContent({ type: 'latexNode', attrs: { displayMode: true, latex: 'E = mc^2' } }).run();
    } else if (command === 'latex-inline') {
      editor.chain().focus().insertContent({ type: 'latexInlineNode', attrs: { latex: '\\psi_i(x)' } }).run();
    } else if (command === 'chemistry') {
      editor.chain().focus().insertContent({ type: 'rdkitNode', attrs: { smiles: 'c1ccccc1' } }).run();
    } else if (command === 'diagram') {
      editor.chain().focus().insertContent({ type: 'diagramNode', attrs: { code: 'graph LR\n  A --> B' } }).run();
    } else if (command === 'h1') {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    } else if (command === 'h2') {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    } else if (command === 'quote') {
      editor.chain().focus().toggleBlockquote().run();
    }
  }

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

<div class="relative w-full">
  <!-- MenuBar Component -->
  <MenuBar 
    {editor} 
    {slashActive} 
    {slashPosition} 
    onSelectSlashItem={handleSelectSlashItem} 
  />

  <!-- TipTap Mount Target Div -->
  <main class="mx-auto max-w-4xl px-4 py-8">
    <div class="min-h-[600px] rounded-3xl border border-[#e6e1da] bg-white p-8 shadow-xs md:p-12">
      <div bind:this={element}></div>
    </div>
  </main>
</div>
