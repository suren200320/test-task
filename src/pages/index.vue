<template>
  <div class="payment-page app-container">
    <h1 class="font-bold text-title-sm sm:text-title">
      Пополните баланс,
      <span class="text-black-light font-medium">
        чтобы получить номер для приема смс
      </span>
    </h1>
    <div
      v-if="!paymentMethodStore.paymentLoading"
      class="payment-page__content flex flex-col gap-5 mt-md sm:gap-lg sm:mt-lg"
    >
      <payment-currency />
      <payment-method
        :active-payment-methods="paymentMethodStore.activePaymentMethods"
        :selected-payment-method="paymentMethodStore.selectedPaymentMethod"
        @update:payment-method="
          (code) => paymentMethodStore.updateSelectedPaymentMethod(code)
        "
      />
      <payment-amount
        :min-amount="paymentMethodStore.minAmount"
        @process-payment="(amount) => paymentMethodStore.processPayment(amount)"
      />
    </div>
  </div>
</template>

<script setup>
import PaymentCurrency from "@/components/payment/currency.vue";
import PaymentMethod from "@/components/payment/method.vue";
import PaymentAmount from "@/components/payment/amount.vue";

import { usePaymentMethod } from "@/store/usePaymentMethod";

const paymentMethodStore = usePaymentMethod();

paymentMethodStore.getPaymentInfo();
</script>
