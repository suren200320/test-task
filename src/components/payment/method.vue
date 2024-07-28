<template>
  <div class="payment-methods-section">
    <h2 class="text-subtitle-sm sm:text-subtitle flex items-center gap-2">
      Выберите способ оплаты
    </h2>
    <div class="mt-0 flex flex-col gap-sm sm:gap-md sm:mt-1">
      <div
        class="payment-method-list"
      >
        <ui-card
          v-for="(method, i) in activePaymentMethods"
          :selected="isSelected(method.code)"
          :key="`method-${i}`"
          class="payment-method-card"
          @click="emit('update:payment-method', method.code)"
        >
          <img
            :src="
              require(`@/assets/images/payment-methods/${method.code}-logo.png`)
            "
            :alt="`${method.code}-logo`"
            class="w-9 h-auto sm:w-12"
          />
          <div class="flex flex-col gap-[2px] sm:gap-[3px]">
            <span class="font-medium text-[13px] sm:text-base">
              {{ method.title }}
            </span>
            <span class="text-[11px] sm:text-[13px] text-black-light">
              Комиссия:
              <span class="font-medium text-black">{{
                method.commission
              }}</span>
            </span>
          </div>
        </ui-card>
      </div>
      <div v-if="selectedMethodInfo" class="method-info">
        <div
          class="cursor-pointer flex items-center gap-[6px]"
          @click="handleInfoAccordion"
        >
          <ui-icon 
            name="exclamation"
            class="hidden sm:block"
            hoverable
          />
          <span class="font-medium text-xs sm:text-sm">
            Внимание, при нажатии раскрывается информация про страны
          </span>
          <ui-icon
            name="arrow"
            class="transition duration-300"
            :class="{ 'rotate-180': isOpenInfoAccordion }"
          />
        </div>
        <ui-accordion :isOpen="isOpenInfoAccordion">
          <div class="info-content text-xs sm:text-sm" v-html="selectedMethodInfo" />
        </ui-accordion>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiCard from "@/components/ui/card.vue";
import UiIcon from "@/components/ui/icon.vue";
import UiAccordion from "@/components/ui/accordion.vue";
import { ref, computed } from "vue";

const props = defineProps({
  activePaymentMethods: Array,
  selectedPaymentMethod: String,
});

const emit = defineEmits(["update:payment-method"]);

const isOpenInfoAccordion = ref(false);

const selectedMethodInfo = computed(() => {
  return props.activePaymentMethods.find(
    (item) => item.code === props.selectedPaymentMethod
  ).description;
});

const isSelected = (code) => {
  return code === props.selectedPaymentMethod;
};

const handleInfoAccordion = () => {
  isOpenInfoAccordion.value = !isOpenInfoAccordion.value;
};
</script>
