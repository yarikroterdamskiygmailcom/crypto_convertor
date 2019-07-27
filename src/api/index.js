export const dataApi = async () => {
  const response = await fetch("https://api.coinmarketcap.com/v1/ticker/");
  const data = await response.json();
  return data.filter(
    e =>
      e.id === "bitcoin" ||
      e.id === "ethereum" ||
      e.id === "ripple" ||
      e.id === "bitcoin-cash" ||
      e.id === "litecoin"
  );
};
