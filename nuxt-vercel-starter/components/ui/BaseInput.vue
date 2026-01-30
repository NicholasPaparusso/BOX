<template>
  <div class="relative group">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      :placeholder="placeholder"
      class="w-full px-5 py-4 bg-gray-50 dark:bg-dark-bg/50 border border-gray-200 dark:border-white/10 rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 group-hover:border-brand-300 dark:group-hover:border-white/20"
      v-bind="$attrs"
    />
    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
