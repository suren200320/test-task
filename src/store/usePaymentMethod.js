import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "@/axios";

import { usePaymentCurrency } from "./usePaymentCurrency";

export const usePaymentMethod = defineStore("payment-method", () => {
  const paymentCurrencyStore = usePaymentCurrency();

  const paymentData = ref(null);
  const selectedPaymentMethod = ref(null);
  const paymentLoading = ref(true);
  const paymentError = ref(null);

  const activePaymentMethods = computed(
    () => paymentData.value?.currencies[paymentCurrencyStore.selectedCurrency]
  );

  const minAmount = computed(
    () =>
      activePaymentMethods.value.find(
        (item) => item.code === selectedPaymentMethod.value
      ).min_amount
  );

  const updateSelectedPaymentMethod = (method) => {
    selectedPaymentMethod.value = method;
  };

  const getPaymentInfo = async () => {
    try {
      const response = await axios.get("/api/payment-info.json");
      paymentData.value = response.data;
      updateCurrencyStore();
    } catch (err) {
      paymentError.value = err.message || "Failed to fetch data";
    } finally {
      paymentLoading.value = false;
    }
  };

  const updateCurrencyStore = () => {
    paymentCurrencyStore.updateCurrencyList(
      Object.keys(paymentData.value.currencies)
    );
    paymentCurrencyStore.updateSelectedCurrency(
      paymentData.value.default_currency
    );
    paymentCurrencyStore.updateDefaultCurrency(
      paymentData.value.default_currency
    );
  };

  const processPayment = async (amount) => {
    const payload = {
      amount,
      currency: paymentCurrencyStore.selectedCurrency,
      paymentMethod: selectedPaymentMethod.value,
    }
    try {
      // can't do post request to JSON file for testing payload sending
      const response = await axios.get("/api/payment-process.json", payload);
      window.location.href = response.data.url;
    } catch (err) {
      paymentError.value = err.message || "Failed to fetch data";
    } finally {
      paymentLoading.value = false;
    }
  };

  return {
    paymentData,
    paymentLoading,
    paymentError,
    activePaymentMethods,
    selectedPaymentMethod,
    minAmount,

    getPaymentInfo,
    updateSelectedPaymentMethod,
    processPayment,
  };
});
