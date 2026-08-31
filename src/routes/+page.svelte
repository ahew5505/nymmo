<script lang="ts">
  import { onMount } from 'svelte';
  import EditorCanvas from '$lib/components/Editor/EditorCanvas.svelte';
  import { 
    BookOpen, Folder, FileText, CheckCircle2, 
    HardDriveDownload, ChevronRight, Menu, X, Plus, 
    Sparkles, ShieldCheck
  } from 'lucide-svelte';

  let syncStatus = 'Offline Ready (RxDB Synced)';
  let isSidebarOpen = true;
  let activeDocId = 'doc_benzene_synthesis';

  const courses = [
    {
      id: 'course-1',
      title: 'Quantum Chemistry',
      modules: [
        { id: 'doc_benzene_synthesis', name: 'Benzene Synthesis & Orbitals' },
        { id: 'doc_chromate', name: 'Chromate Ion Complex Kinetics' },
        { id: 'doc_spectroscopy', name: 'UV-Vis Spectroscopy Principles' }
      ]
    },
    {
      id: 'course-2',
      title: 'Organic Reaction Pathways',
      modules: [
        { id: 'doc_nucleophilic', name: 'Nucleophilic Substitution' },
        { id: 'doc_electrophilic', name: 'Electrophilic Addition' }
      ]
    }
  ];

  function handleSaveStatus(status: string) {
    syncStatus = status;
  }

  function handleExportStatic() {
    alert('Exporting static standalone course assets bundle for Tauri / Capacitor deployment...');
  }
</script>

<div class="flex h-screen w-screen overflow-hidden bg-[#faf8f5]">
  <!-- Left Sidebar (Sandstone Warm Aesthetic) -->
  <aside 
    class="relative flex flex-col justify-between border-r border-[#e6e1da] bg-[#f3efea] transition-all duration-300 z-20 {isSidebarOpen ? 'w-72' : 'w-16'}"
  >
    <div>
      <!-- App Brand Header -->
      <div class="flex items-center justify-between p-4 border-b border-[#e6e1da]">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d96b43] text-white font-bold shadow-xs">
            N
          </div>
          {#if isSidebarOpen}
            <div>
              <h1 class="text-sm font-bold tracking-tight text-[#2c2a29]">Nymmo Studio</h1>
              <p class="text-[11px] text-[#78716c]">Academic Course Editor</p>
            </div>
          {/if}
        </div>
        <button 
          type="button"
          on:click={() => (isSidebarOpen = !isSidebarOpen)}
          class="rounded-lg p-1.5 text-[#78716c] hover:bg-[#e6e1da] hover:text-[#2c2a29] transition-colors"
        >
          {#if isSidebarOpen}
            <X class="w-4 h-4" />
          {:else}
            <Menu class="w-4 h-4" />
          {/if}
        </button>
      </div>

      <!-- Navigation Document Tree -->
      {#if isSidebarOpen}
        <div class="p-3 space-y-4 overflow-y-auto max-h-[calc(100vh-140px)]">
          <div class="flex items-center justify-between px-2 text-xs font-semibold text-[#78716c] uppercase tracking-wider">
            <span>Course Library</span>
            <button class="p-1 hover:bg-[#e6e1da] rounded-md transition-colors" title="New Course">
              <Plus class="w-3.5 h-3.5" />
            </button>
          </div>

          <div class="space-y-3">
            {#each courses as course}
              <div class="space-y-1">
                <div class="flex items-center gap-2 px-2 py-1 text-xs font-semibold text-[#2c2a29]">
                  <Folder class="w-3.5 h-3.5 text-[#d96b43]" />
                  <span>{course.title}</span>
                </div>
                <div class="pl-4 space-y-0.5 border-l-2 border-[#e6e1da] ml-3">
                  {#each course.modules as doc}
                    <button
                      type="button"
                      on:click={() => (activeDocId = doc.id)}
                      class="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-left transition-colors {activeDocId === doc.id ? 'bg-white font-medium text-[#d96b43] shadow-2xs border border-[#e6e1da]' : 'text-[#78716c] hover:bg-[#e6e1da]/60 hover:text-[#2c2a29]'}"
                    >
                      <FileText class="w-3.5 h-3.5" />
                      <span class="truncate">{doc.name}</span>
                    </button>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div class="p-2 space-y-3 flex flex-col items-center">
          <button class="p-2.5 rounded-xl bg-white border border-[#e6e1da] text-[#d96b43] shadow-2xs">
            <BookOpen class="w-4 h-4" />
          </button>
        </div>
      {/if}
    </div>

    <!-- RxDB Offline Replication Footer Widget -->
    <div class="p-3 border-t border-[#e6e1da] bg-[#ebd8c8]/30">
      {#if isSidebarOpen}
        <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#e6e1da] shadow-2xs">
          <div class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <div>
            <div class="text-[11px] font-semibold text-[#2c2a29] flex items-center gap-1">
              <span>{syncStatus}</span>
            </div>
            <div class="text-[10px] text-[#78716c]">IndexedDB / SQLite Storage</div>
          </div>
        </div>
      {:else}
        <div class="flex justify-center p-1" title={syncStatus}>
          <ShieldCheck class="w-5 h-5 text-emerald-600" />
        </div>
      {/if}
    </div>
  </aside>

  <!-- Main Content Area -->
  <div class="flex-1 flex flex-col h-full overflow-hidden">
    <!-- Top Action Bar -->
    <header class="flex items-center justify-between px-8 py-4 border-b border-[#e6e1da] bg-white select-none">
      <div class="flex items-center gap-3">
        <span class="text-xs px-2.5 py-1 rounded-md bg-[#fdf3ef] text-[#d96b43] font-mono font-medium">CHEM-402</span>
        <h2 class="text-base font-bold text-[#2c2a29]">3.2 Quantum Chemistry & Aromaticity</h2>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          on:click={handleExportStatic}
          class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#d96b43] hover:bg-[#c85a32] text-white text-xs font-semibold shadow-xs transition-all duration-200"
        >
          <HardDriveDownload class="w-4 h-4" />
          <span>Static Export (Tauri / Capacitor)</span>
        </button>
      </div>
    </header>

    <!-- Scrollable TipTap Document Editor View -->
    <div class="flex-1 overflow-y-auto">
      <EditorCanvas docId={activeDocId} onSaveStatusChange={handleSaveStatus} />
    </div>
  </div>
</div>
