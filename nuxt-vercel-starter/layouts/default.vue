<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="border-b border-white/5 bg-dark-surface/50 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Box Logo" class="h-8 w-auto object-contain" />
          <span class="font-bold text-xl tracking-tight text-white hidden sm:block">BOX APP</span>
        </div>

        <!-- Navigation (Placeholder) -->
        <nav class="flex gap-4">
          <NuxtLink to="/" class="text-sm font-medium hover:text-brand-500 transition-colors">Home</NuxtLink>
          <NuxtLink to="/login" class="text-sm font-medium hover:text-brand-500 transition-colors">Login</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-6 border-t border-white/5 text-center text-sm text-gray-500">
      &copy; {{ new Date().getFullYear() }} Box App. All rights reserved.
    </footer>
  </div>
</template>
