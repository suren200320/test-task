<template>
  <div
    class="card-container relative border-2 border-transparent"
    :class="
      selected
        ? 'border-2 !border-primary'
        : 'shadow-card hover:shadow-card-hover'
    "
  >
    <slot />
    <span v-if="badge" class="badge-contrainer">
      {{ badge }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  badge: String,
  selected: Boolean
});
</script>
