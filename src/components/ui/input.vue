<template>
  <div class="relative flex flex-col gap-[3px] sm:gap-1">
    <input
      class="ui-input"
      :class="{ 'border-error': showError }"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      @input="(e) => emit('update:modelValue', e.target.value)"
      @change="(e) => emit('change', e.target.value)"
      @blur="emit('blur')"
    />
    <div class="input-details">
      <span 
        v-if="showError"
        class="error-message"
      >
        {{ errorMessage }} 
      </span>
      <ui-icon
        v-if="clearable"
        @click="emit('update:modelValue', '')"
        class="clear-icon transition-all duration-300 cursor-pointer opacity-0 absolute right-5 top-4 sm:top-[17px]"
        width="16px"
        height="16px"
        name="close"
      />
    </div>
  </div>
</template>

<script setup>
import UiIcon from "@/components/ui/icon.vue";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  clearable: Boolean,
  errorMessage: {
    type: [Boolean, String],
    default: true
  }
});

const emit = defineEmits(["update:modelValue", "change", "blur"]);

const showError = computed(() => typeof props.errorMessage === "string")
</script>
