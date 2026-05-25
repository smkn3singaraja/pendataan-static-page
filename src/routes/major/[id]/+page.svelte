<script lang="ts">
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
  let major = $derived(data.major);
</script>

<svelte:head>
  <title>{major.long_name} | SMK Negeri 3 Singaraja</title>
</svelte:head>

<div class="relative min-h-screen pb-20">
  <!-- Banner Section -->
  <div class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
    <img 
      src={major.cover_url} 
      alt="{major.long_name} Banner" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent"></div>
    
    <div class="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto flex flex-col justify-end h-full">
      <div class="flex items-center gap-4 mb-4 animate-fade-in-up">
        <a href="/#majors" aria-label="Kembali ke beranda" class="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-indigo-700 hover:bg-white/50 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
        <span class="px-4 py-1.5 bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-full text-sm font-bold tracking-wider shadow-sm">
          {major.short_name}
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-2 animate-fade-in-up animation-delay-100 text-glow">
        {major.long_name}
      </h1>
    </div>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
    <div class="glass-card rounded-3xl p-8 md:p-12 animate-fade-in-up animation-delay-200">
      
      <!-- Poster Section -->
      <div class="mb-12">
        <img 
          src={major.poster_url} 
          alt="Poster {major.long_name}" 
          class="w-full max-w-2xl mx-auto rounded-2xl shadow-xl shadow-slate-200"
        />
      </div>

      <!-- Description Section -->
      <div class="prose prose-indigo max-w-none mb-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">Tentang Program Keahlian</h2>
        <p class="text-slate-600 text-lg leading-relaxed mb-6">
          {major.description}
        </p>
        {#if major.major_page}
          <a href={major.major_page} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            Kunjungi Situs Jurusan
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        {/if}
      </div>

      <!-- Video Section -->
      <div class="rounded-2xl overflow-hidden glass border border-slate-200/50 shadow-2xl aspect-video">
        <iframe 
          class="w-full h-full"
          src={major.youtube_video_url} 
          title="Video Profil {major.long_name}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <!-- Survey CTA Section (Inline) -->
      <div class="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 text-center relative overflow-hidden shadow-sm">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoOTksMTAyLDI0MSwwLjA1KSIvPjwvc3ZnPg==')] opacity-60"></div>
        <div class="relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold text-indigo-950 mb-4">Tertarik dengan {major.short_name}?</h3>
          <p class="text-indigo-700/80 text-lg mb-8 max-w-2xl mx-auto">
            Bantu kami memahami minat Anda dengan mengisi survey singkat ini. Suara Anda sangat berarti bagi pengembangan sekolah kami.
          </p>
          <a 
            href="https://forms.gle/m6LhJjMD9Qk6yTah6" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Ikuti Survey
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }
  
  .animation-delay-100 {
    animation-delay: 100ms;
  }
  
  .animation-delay-200 {
    animation-delay: 200ms;
  }
</style>
