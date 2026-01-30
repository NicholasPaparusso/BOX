<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="py-20 px-4 text-center">
      <div class="max-w-4xl mx-auto space-y-6">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome to <span class="text-brand-500">The BOX</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Gestisci il tuo box, acquista prodotti e monitora le tue attività in un'unica piattaforma.
        </p>
        <div class="flex justify-center gap-4 pt-4">
          <NuxtLink to="/login" class="px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-500/20">
            Accedi
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
