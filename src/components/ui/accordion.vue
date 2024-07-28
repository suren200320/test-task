<template>
  <div 
    class="accordion container px-[2px] w-full transition-all duration-300 h-auto"
    :class="isOpen ? 'max-h-[90px] overflow-auto py-2 sm:py-3' : 'max-h-0 overflow-hidden'"
  >
    <slot />  
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>

