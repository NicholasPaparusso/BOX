<template>
  <button
    class="relative w-full py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
  >
    <div class="absolute inset-0 bg-white/20 translate-y-full skew-y-12 transition-transform duration-500 group-hover:translate-y-0"></div>
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot />
    </span>
  </button>
</template>
