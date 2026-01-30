<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold">Inventario</h1>
      <button class="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20">
        + Nuovo Prodotto
      </button>
    </div>

    <!-- Inventory Table -->
    <div class="bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm dark:shadow-none transition-colors duration-500">
      <table class="w-full text-left">
        <thead class="bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/5">
          <tr>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Prodotto</th>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Categoria</th>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Prezzo Costo</th>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Prezzo Socio (+10%)</th>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400 text-center">Stock</th>
            <th class="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400 text-right">Azioni</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-white/5">
          <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <td class="px-6 py-4">
              <div class="font-bold text-gray-900 dark:text-white">{{ product.name }}</div>
              <div class="text-xs text-gray-500">{{ product.sku }}</div>
            </td>
            <td class="px-6 py-4">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300">
                {{ product.category }}
              </span>
            </td>
            <!-- Editable Cost Price -->
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <span class="text-gray-500">€</span>
                <input 
                  type="number" 
                  step="0.01" 
                  v-model.number="product.costPrice" 
                  @change="updateCost(product)" 
                  class="bg-transparent border-b border-gray-300 dark:border-white/20 w-20 text-gray-900 dark:text-white font-mono focus:border-brand-500 outline-none transition-colors"
                />
              </div>
            </td>

            <!-- Computed Prices (Read-only) -->
            <td class="px-6 py-4 font-mono text-brand-600 dark:text-brand-500 font-bold">
              € {{ (product.costPrice * 1.10).toFixed(2) }}
              <span class="block text-xs text-gray-500 font-normal">Guest: € {{ (product.costPrice * 1.30).toFixed(2) }}</span>
            </td>
            
            <!-- Editable Stock -->
            <td class="px-6 py-4 text-center">
              <div class="flex items-center justify-center gap-3">
                <button @click="updateStock(product, -1)" class="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 flex items-center justify-center font-bold text-lg text-gray-700 dark:text-white">-</button>
                <span class="font-mono text-lg font-bold w-8 text-gray-900 dark:text-white">{{ product.stock }}</span>
                <button @click="updateStock(product, 1)" class="w-8 h-8 rounded-lg bg-brand-500 hover:bg-brand-600 flex items-center justify-center font-bold text-lg text-white">+</button>
              </div>
            </td>

            <td class="px-6 py-4 text-right">
              <button class="text-gray-400 hover:text-brand-500 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="products.length === 0" class="p-12 text-center text-gray-500">
        Caricamento prodotti...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})

// Fetch products from API
const { data: products, refresh } = await useFetch('/api/admin/products')

async function updateStock(product: any, change: number) {
  const newStock = product.stock + change
  if (newStock < 0) return

  // Optimistic UI
  const oldStock = product.stock
  product.stock = newStock

  try {
    await $fetch('/api/admin/products', {
      method: 'PUT',
      body: { id: product.id, stock: newStock }
    })
  } catch (e) {
    product.stock = oldStock
    alert('Errore aggiornamento stock')
  }
}

async function updateCost(product: any) {
  try {
    // API will handle the recalculation of priceSocio and priceGuest based on this cost
    await $fetch('/api/admin/products', {
      method: 'PUT',
      body: { id: product.id, costPrice: product.costPrice }
    })
    // Optional: Refresh to get server-calculated values (though our local formula matches)
    // refresh() 
  } catch (e) {
    alert('Errore aggiornamento prezzo')
  }
}
</script>
