<template>
  <button 
    class="ui-button" 
    :class="variant" 
    :style="{ maxWidth: width }"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return ['primary', 'secondary'].includes(value);
    }
  },
  width: {
    type: String,
    default: "100%",
  },
  type: {
    type: String,
    default: "button",
    validator(value) {
      return ['submit', 'reset', "button"].includes(value);
    }
  },
  disabled: Boolean,
});
</script>
