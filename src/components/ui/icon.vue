<template>
  <img
    :class="{ 'hover-effect': hoverable }"
    :src="require(`@/assets/images/icons/${name}-icon.svg`)"
    :alt="`${name}-icon`"
    :width="name"
    :height="height"
  />
</template>

<script setup>
defineProps({
  name: {
    required: true,
    type: String,
  },
  width: {
    type: String,
    default: "14px",
  },
  height: {
    type: String,
    default: "14px",
  },
  hoverable: Boolean,
});
</script>

<style scoped>
.hover-effect {
  cursor: pointer;
  transition: all 300ms;
}
.hover-effect:hover {
  filter: invert(11%) sepia(4%) saturate(1933%) hue-rotate(169deg)
    brightness(25%) contrast(89%);
}
</style>
