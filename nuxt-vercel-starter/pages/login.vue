<template>
  <div class="flex items-center justify-center min-h-[80vh]">
    <div class="w-full max-w-md p-8 bg-dark-surface rounded-xl border border-white/10 shadow-2xl">
      <h2 class="text-3xl font-bold text-center mb-8">Login</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input v-model="email" type="email" class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="user@box.com" required />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-2">Password</label>
          <input v-model="password" type="password" class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" required />
        </div>
        
        <button type="submit" :disabled="loading" class="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50">
          {{ loading ? 'Accesso in corso...' : 'Accedi' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { signIn } = useAuth()
const email = ref('')
const password = ref('')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  try {
    const { error, url } = await signIn('credentials', {
      email: email.value,
      password: password.value,
      redirect: false
    })
    
    if (error) {
      alert('Credenziali non valide')
    } else {
      return navigateTo('/')
    }
  } catch (e) {
    console.error(e)
    alert('Errore durante il login')
  } finally {
    loading.value = false
  }
}
</script>
