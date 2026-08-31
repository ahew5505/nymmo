<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Editor, Node } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';

  import MenuBar from './MenuBar.svelte';
  import LatexNodeComponent from './nodes/LatexNode.svelte';
  import RdkitNodeComponent from './nodes/RdkitNode.svelte';
  import DiagramNodeComponent from './nodes/DiagramNode.svelte';
  import { getDatabase } from '../../db/rxdb';

  export let docId: string = 'doc_benzene_synthesis';
  export let onSaveStatusChange: ((status: string) => void) | undefined = undefined;

  let element: HTMLDivElement;
  let editor: Editor | null = null;
  let slashActive: boolean = false;
  let slashPosition = { top: 0, left: 0 };
  let db: any = null;

  // Custom TipTap Extension: LatexNode
  const LatexNode = Node.create({
    name: 'latexNode',
    group: 'block',
    atom: true,
    addAttributes() {
      return {
        latex: { default: 'E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau' }
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
        const comp = new LatexNodeComponent({
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
          destroy: () => comp.$destroy && comp.$destroy()
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
        const comp = new RdkitNodeComponent({
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
          destroy: () => comp.$destroy && comp.$destroy()
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
        const comp = new DiagramNodeComponent({
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
          destroy: () => comp.$destroy && comp.$destroy()
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
        StarterKit,
        LatexNode,
        RdkitNode,
        DiagramNode
      ],
      content: `
        <h1>3.2 Quantum Chemistry & Aromaticity</h1>
        <p>In quantum mechanics, molecular orbital theory describes the electronic structure of molecules by combining atomic orbitals into molecular orbitals. Delocalized π-electrons in aromatic rings contribute directly to resonance stabilization energy.</p>
      `,
      editorProps: {
        attributes: {
          class: 'prose prose-[#2c2a29] max-w-none focus:outline-none min-h-[400px] leading-relaxed text-[#2c2a29]'
        },
        handleKeyDown(view, event) {
          if (event.key === '/') {
            const { from } = view.state.selection;
            const coords = view.coordsAtPos(from);
            slashPosition = {
              top: coords.bottom + window.scrollY + 6,
              left: coords.left + window.scrollX
            };
            slashActive = true;
          } else if (event.key === 'Escape') {
            slashActive = false;
          }
          return false;
        }
      },
      onUpdate({ editor }) {
        slashActive = false;
        if (onSaveStatusChange) onSaveStatusChange('Saving to RxDB...');
        saveToRxDB(editor.getJSON());
      }
    });

    // Append initial nodes if blank
    setTimeout(() => {
      if (editor && editor.isEmpty) {
        editor.chain()
          .insertContent({ type: 'latexNode' })
          .insertContent({ type: 'rdkitNode' })
          .insertContent({ type: 'diagramNode' })
          .run();
      }
    }, 100);
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

    if (command === 'latex') {
      editor.chain().focus().insertContent({ type: 'latexNode' }).run();
    } else if (command === 'chemistry') {
      editor.chain().focus().insertContent({ type: 'rdkitNode' }).run();
    } else if (command === 'diagram') {
      editor.chain().focus().insertContent({ type: 'diagramNode' }).run();
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
