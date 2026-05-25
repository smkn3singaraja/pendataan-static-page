<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <nav class="fixed top-0 w-full z-50 glass transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center gap-3">
            <img src="/images/stemsi-square.png" alt="SMK Negeri 3 Singaraja Logo" class="w-10 h-10 object-contain" />
            <span class="font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">SMK Negeri 3 Singaraja</span>
          </a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="/" class="px-4 py-2 rounded-lg text-sm font-semibold transition-all {$page.url.pathname === '/' ? 'text-indigo-700 bg-indigo-50' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'}">Beranda</a>
            <a href="/#majors" class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-all">Konsentrasi Keahlian</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="flex-grow pt-20 overflow-x-hidden">
    {#key $page.url.pathname}
      <div 
        in:fly={{ y: 20, duration: 400, delay: 200, easing: cubicOut }} 
        out:fade={{ duration: 150 }}
      >
        {@render children()}
      </div>
    {/key}
  </main>

  <footer class="glass mt-auto py-8">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="text-slate-500 font-medium text-sm">&copy; 2026 SMK Negeri 3 Singaraja. All rights reserved.</p>
    </div>
  </footer>
</div>
