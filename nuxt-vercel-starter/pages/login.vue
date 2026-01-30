<template>
  <div class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
    
    <!-- Cinematic Bokeh Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-800/30 blur-[100px] rounded-full animate-pulse"></div>
    </div>

    <div class="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
      
      <!-- Top Branding -->
      <div class="mb-20">
        <img src="/logo-orange-white.png" alt="The Box" class="h-24 w-auto opacity-90" />
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left: Atmospheric Text -->
        <div class="text-center lg:text-left space-y-6">
          <div class="inline-block px-3 py-1 border border-orange-500/30 rounded-full">
            <span class="text-[10px] uppercase tracking-[0.4em] text-orange-400 font-bold">Exclusive Access</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-light text-white leading-none tracking-tight">
            Il Disagio <br/>
            <span class="font-bold italic">inizia qui</span>
          </h1>
          <p class="text-neutral-400 text-lg font-light max-w-sm mx-auto lg:mx-0">
            Benvenuto al BRONX.
          </p>
        </div>

        <!-- Right: Refined Dark Form -->
        <div class="w-full max-w-sm mx-auto">
          <form class="space-y-8" @submit.prevent="handleLogin">
            <div class="space-y-4">
              <div class="group border-b border-white/10 py-2 focus-within:border-orange-500 transition-colors">
                <label class="block text-[10px] uppercase tracking-widest text-neutral-500 group-focus-within:text-orange-400 transition-colors">Identifier</label>
                <input 
                  v-model="email"
                  type="email"
                  placeholder="MEMBER EMAIL"
                  class="w-full bg-transparent border-none py-2 text-white text-lg focus:outline-none placeholder:text-neutral-700 tracking-wider font-light"
                />
              </div>
              
              <div class="group border-b border-white/10 py-2 focus-within:border-orange-500 transition-colors">
                <label class="block text-[10px] uppercase tracking-widest text-neutral-500 group-focus-within:text-orange-400 transition-colors">Access Key</label>
                <input 
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  class="w-full bg-transparent border-none py-2 text-white text-lg focus:outline-none placeholder:text-neutral-700 tracking-wider"
                />
              </div>
            </div>

            <button 
              type="submit"
              :disabled="loading"
              class="w-full bg-white text-black py-5 flex items-center justify-between px-8 group hover:bg-orange-500 hover:text-white transition-all duration-500 disabled:opacity-50"
            >
              <span class="font-black uppercase tracking-widest text-xs">{{ loading ? 'Verifying...' : 'Verify Credentials' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          <div class="mt-10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-neutral-600">
            <button class="hover:text-white transition-colors">Reset Key</button>
            <div class="w-1 h-1 bg-neutral-800 rounded-full"></div>
            <button class="hover:text-white transition-colors">Guest Protocol</button>
          </div>
        </div>
      </div>

      <!-- Ambient Footer Text -->
      <div class="mt-32 opacity-20 text-[9px] uppercase tracking-[0.5em] text-white pointer-events-none">
        Design Excellence // The Box Ecosystem v1.0
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const { signIn } = useAuth()
const email = ref('')
const password = ref('')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  try {
    const { error } = await signIn('credentials', {
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
    alert('Errore imprevisto')
  } finally {
    loading.value = false
  }
}
</script>
