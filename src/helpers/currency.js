export const getCurrencySymbol = (currencyCode) => {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CRYPTO: "",
    RUB: "₽",
  };
  return currencySymbols[currencyCode] || "";
};

export const convertPrice = (amount, currencyCode) => {
  const formattedAmount = amount.toLocaleString();

  return `${formattedAmount} ${getCurrencySymbol(currencyCode)}`
}
