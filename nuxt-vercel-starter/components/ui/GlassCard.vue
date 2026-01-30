<template>
  <div class="glass-card relative overflow-hidden bg-white/80 dark:bg-dark-card backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-glow/20 text-gray-900 dark:text-white">
    <slot />
  </div>
</template>

<style scoped>
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  transition: 0.5s;
}

.glass-card:hover::before {
  left: 100%;
}
</style>
