<template>
  <div class="currency-section">
    <h2 class="text-subtitle-sm sm:text-subtitle flex items-center gap-2">
      <span>Выберите валюту оплаты</span>
      <ui-icon class="hidden sm:block" name="question" hoverable />
    </h2>
    <div class="mt-sm flex flex-col gap-flex-sm sm:flex-row sm:gap-4 sm:mt-md">
      <ui-card
        v-if="paymentCurrencyStore.existCrypto"
        badge="Рекомендуем"
        :selected="isSelected('CRYPTO')"
        class="flex items-center gap-2 sm:gap-sm"
        @click="paymentCurrencyStore.updateSelectedCurrency('CRYPTO')"
      >
        <ui-icon name="crypto" width="24px" height="24px" />
        <span class="text-[13px] font-medium sm:text-sm">Криптовалюты</span>
      </ui-card>
      <ui-card
        class="currency-accordion-activator select-none flex items-center gap-sm"
        @click="handleCurrencyAccordion"
      > 
        <div
          class="selected-currency flex items-center border-r border-border-color gap-3 py-2 pr-4 sm:py-3 sm:pr-5"
        >
          <img
            :src="
              require(`@/assets/images/flags/${paymentCurrencyStore.currencySelectActiveItem}.png`)
            "
            class="w-6 h-6 sm:w-[28px] sm:h-[28px]"
            :alt="`${paymentCurrencyStore.currencySelectActiveItem}-flag`"
          />
          <span class="text-sm font-medium sm:text-base">
            {{ paymentCurrencyStore.currencySelectActiveItem }}
          </span>
        </div>
        <div class="flex items-center gap-2 sm:gap-sm pl-2 sm:pl-3">
          <ui-icon name="currency" width="24px" height="24px" />
          <span class="text-[13px] font-medium sm:text-sm">Другие валюты</span>
          <ui-icon
            name="arrow"
            class="transition duration-300"
            :class="{ 'rotate-180': isOpenCurrencyAccordion }"
          />
        </div>
      </ui-card>
    </div>
    <ui-accordion
      class="gap-2 flex flex-wrap sm:gap-md"
      :class="{ 'mt-3 sm:mt-md': isOpenCurrencyAccordion }"
      :is-open="isOpenCurrencyAccordion"
    >
      <ui-card
        v-for="(currency, i) in paymentCurrencyStore.currenciesWithoutCrypto"
        :key="`currency-${i}`"
        :selected="isSelected(currency)"
        class="h-11 px-md flex items-center gap-2 sm:gap-3 sm:h-[58px] sm:px-5"
        @click="paymentCurrencyStore.updateSelectedCurrency(currency)"
      >
        <img
          :src="require(`@/assets/images/flags/${currency}.png`)"
          class="w-6 h-6 sm:w-[28px] sm:h-[28px]"
          :alt="`${currency}-flag`"
        />
        <span class="text-xs font-medium sm:text-sm">
          {{ currency }}
        </span>
      </ui-card>
    </ui-accordion>
  </div>
</template>

<script setup>
import UiIcon from "@/components/ui/icon.vue";
import UiCard from "@/components/ui/card.vue";
import UiAccordion from "@/components/ui/accordion.vue";

import { ref } from "vue";

import { usePaymentCurrency } from "@/store/usePaymentCurrency";

const paymentCurrencyStore = usePaymentCurrency();

const isOpenCurrencyAccordion = ref(false);

const handleCurrencyAccordion = () => {
  isOpenCurrencyAccordion.value = !isOpenCurrencyAccordion.value;
};

const isSelected = (currency) => {
  return paymentCurrencyStore.selectedCurrency === currency;
};
</script>
