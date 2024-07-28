import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { usePaymentMethod } from "./usePaymentMethod";

export const usePaymentCurrency = defineStore("payment-currency", () => {
  const paymentMethodStore = usePaymentMethod();

  const selectedCurrency = ref(null);
  const currencyList = ref(null);
  const defaultCurrency = ref(null);

  const existCrypto = computed(() => currencyList.value?.includes("CRYPTO"));
  const currenciesWithoutCrypto = computed(() =>
    currencyList.value?.filter((item) => item !== "CRYPTO")
  );
  const currencySelectActiveItem = computed(() =>
    selectedCurrency.value !== "CRYPTO"
      ? selectedCurrency.value
      : defaultCurrency.value
  );

  const updateSelectedCurrency = (currency) => {
    selectedCurrency.value = currency;
    paymentMethodStore.updateSelectedPaymentMethod(
      paymentMethodStore.activePaymentMethods[0].code
    );
  };

  const updateDefaultCurrency = (currency) => {
    defaultCurrency.value = currency;
  };

  const updateCurrencyList = (currencies) => {
    currencyList.value = currencies;
  };

  return {
    currencyList,
    selectedCurrency,
    existCrypto,
    currenciesWithoutCrypto,
    defaultCurrency,
    currencySelectActiveItem,

    updateCurrencyList,
    updateSelectedCurrency,
    updateDefaultCurrency,
  };
});
