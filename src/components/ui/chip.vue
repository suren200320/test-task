<template>
  <div 
    class="chip-container"
    :class="{ 'border-primary text-black' : selected }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  selected: Boolean
})
</script>