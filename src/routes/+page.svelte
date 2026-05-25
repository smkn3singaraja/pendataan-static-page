<script lang="ts">
  import { majors } from '$lib/data/majors';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
</script>

<svelte:head>
  <title>Beranda | SMK Negeri 3 Singaraja</title>
</svelte:head>

<section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  <!-- Background effects -->
  <div class="absolute inset-0 z-0">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
    <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
  </div>

  <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
      <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Masa Depan Digital</span>
      <span class="block mt-2 text-slate-800">Dimulai dari Sini.</span>
    </h1>
    <p class="mt-8 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
      Jelajahi konsentrasi keahlian unggulan di SMK Negeri 3 Singaraja. Temukan passion Anda dan kembangkan keterampilan untuk menjadi profesional di industri kreatif dan teknologi.
    </p>
    <div class="mt-10 flex justify-center gap-4">
      <a href="#majors" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1">
        Lihat Konsentrasi Keahlian
      </a>
    </div>
  </div>
</section>

<section id="majors" class="py-24 bg-white/50 backdrop-blur-sm border-t border-slate-200/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-20">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 mb-6">Konsentrasi Keahlian</h2>
      <div class="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each majors as major, i}
        <div in:fly={{ y: 50, duration: 800, delay: i * 100, easing: cubicOut }} class="h-full">
          <a href={`/major/${major.id}`} class="group block h-full">
            <div class="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative group-hover:border-indigo-500/50">
            <div class="relative h-80 overflow-hidden">
              <img 
                src={major.cover_url} 
                alt={major.long_name} 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div class="absolute bottom-6 left-6 right-6">
                <span class="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider text-white border border-white/30 inline-block mb-3 shadow-sm">
                  {major.short_name}
                </span>
                <h3 class="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {major.long_name}
                </h3>
              </div>
            </div>
            
            <div class="p-8 flex-grow flex flex-col justify-between bg-white/50">
              <p class="text-slate-600 text-base leading-relaxed line-clamp-3 mb-6">
                {major.description}
              </p>
              <div class="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                Pelajari selengkapnya
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
