<template>
  <div class="flex h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-sans antialiased overflow-hidden transition-colors duration-500">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-white/5 flex flex-col transition-colors duration-500">
      <div class="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-white/5">
        <span class="font-bold text-xl tracking-tight text-gray-900 dark:text-white">THE <span class="text-brand-500">BOX</span></span>
        
        <!-- Mini Theme Toggle -->
        <button @click="toggleTheme" class="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        </button>
      </div>

      <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand-500 dark:hover:text-white transition-all" active-class="bg-brand-500/10 text-brand-500 font-medium">
          <!-- Icon Placeholder (Grid) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          Dashboard
        </NuxtLink>

        <NuxtLink to="/admin/inventory" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand-500 dark:hover:text-white transition-all" active-class="bg-brand-500/10 text-brand-500 font-medium">
          <!-- Icon Placeholder (Box) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          Inventario
        </NuxtLink>

        <!-- Placeholder for future modules -->
        <div class="px-4 py-3 text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider mt-6">Gestione</div>
        
        <NuxtLink to="/admin/users" class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand-500 dark:hover:text-white transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          Utenti
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-gray-200 dark:border-white/5">
        <button @click="signOut()" class="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Esci
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-8 relative">
       <!-- Gradient Orb for atmosphere (Dark Mode) -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity"></div>
       
       <!-- Gradient Orb for atmosphere (Light Mode) -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none opacity-100 dark:opacity-0 transition-opacity"></div>
       <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth()
const { isDark, toggleTheme } = useTheme()
</script>
