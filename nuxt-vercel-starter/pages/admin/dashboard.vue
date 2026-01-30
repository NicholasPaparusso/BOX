<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <GlassCard class="p-6 !bg-brand-500/10 !border-brand-500/20">
        <h3 class="text-brand-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Utenti Totali</h3>
        <p class="text-3xl font-bold text-brand-700 dark:text-white">124</p>
      </GlassCard>

      <GlassCard class="p-6 bg-white/50 dark:bg-dark-card border-gray-200 dark:border-white/10">
        <h3 class="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Prodotti in Stock</h3>
        <p class="text-3xl font-bold text-gray-900 dark:text-white">45</p>
      </GlassCard>

      <GlassCard class="p-6 !bg-red-500/10 !border-red-500/20">
        <h3 class="text-red-600 dark:text-red-400 text-sm font-medium uppercase tracking-wider mb-1">Scorte Basse</h3>
        <p class="text-3xl font-bold text-red-700 dark:text-red-100">3</p>
      </GlassCard>
    </div>

    <!-- Quick Actions -->
    <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Azioni Rapide</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink to="/admin/inventory" class="group p-6 bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand-500/30 transition-all flex items-center justify-between shadow-sm dark:shadow-none hover:shadow-md">
        <div>
          <h3 class="font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">Gestisci Inventario</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Modifica prezzi e quantità</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </div>
      </NuxtLink>

      <button class="group p-6 bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand-500/30 transition-all flex items-center justify-between shadow-sm dark:shadow-none hover:shadow-md">
        <div>
          <h3 class="font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">Genera Chiave Ospite</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Crea un codice di accesso temporaneo</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlassCard from '~/components/ui/GlassCard.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin' // We need to create this
})
</script>
