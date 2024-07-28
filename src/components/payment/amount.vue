<template>
  <div class="payment-amount-section">
    <h2 class="text-subtitle-sm sm:text-subtitle flex items-center gap-2">
      Укажите сумму платежа
    </h2>
    <form class="mt-sm sm:mt-md" @submit.prevent="handlePayment">
      <ui-input
        v-model="amount"
        type="number"
        :placeholder="amountInputPlaceholder"
        :error-message="isValidAmount"
        clearable
        @blur="validateAmountInput"
      />
      <div
        class="w-full mt-sm flex flex-nowrap overflow-x-auto gap-2 sm:gap-sm"
      >
        <ui-chip
          v-for="(amount, i) in amountList"
          :key="`amount-${i}`"
          :selected="isSelectedAmount(amount)"
          @click="updateAmount(amount)"
        >
          {{ convertPrice(amount, paymentCurrencyStore.selectedCurrency) }}
        </ui-chip>
      </div>
      <ui-button class="mt-5 sm:mt-lg" type="submit" :disabled="!isValidForm">
        Оплатить
      </ui-button>
    </form>
  </div>
</template>

<script setup>
import UiInput from "@/components/ui/input.vue";
import UiChip from "@/components/ui/chip.vue";
import UiButton from "@/components/ui/button.vue";

import { ref, computed } from "vue";

import { usePaymentCurrency } from "@/store/usePaymentCurrency";

import { getCurrencySymbol, convertPrice } from "@/helpers/currency";
import { minValue } from "@/helpers/validations";
import { amountList } from "@/utils/constants";

const paymentCurrencyStore = usePaymentCurrency();

const props = defineProps({
  minAmount: Number,
});

const emit = defineEmits(["process-payment"]);

const amount = ref("");
const isValidAmount = ref(true);

const amountInputPlaceholder = computed(
  () =>
    `Минимальная сумма платежа: ${props.minAmount}${getCurrencySymbol(
      paymentCurrencyStore.selectedCurrency
    )}`
);
const amountInputErrorMessage = computed(
  () =>
    `Внимание, минимальная сумма  ${props.minAmount}${getCurrencySymbol(
      paymentCurrencyStore.selectedCurrency
    )}`
);
const isValidForm = computed(
  () => amount.value && Object.is(isValidAmount.value, true)
);

const validateAmountInput = () => {
  isValidAmount.value = minValue(
    amount.value,
    props.minAmount,
    amountInputErrorMessage.value
  );
};
const updateAmount = (val) => {
  amount.value = val;
  validateAmountInput();
};
const isSelectedAmount = (val) => {
  return amount.value === val;
};
const handlePayment = () => {
  if (!isValidForm.value) return;
  emit("process-payment", amount.value);
};
</script>
