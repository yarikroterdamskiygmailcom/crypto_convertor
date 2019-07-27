export const dataConvert = (e, sel, val, value) => {
  const num = Number(value);
  switch (true) {
    case sel === "bitcoin" && val === "RUB":
      return num * (e * 60);
    case sel === "bitcoin" && val === "USD":
      return num * e;
    case sel === "bitcoin" && val === "EUR":
      return num * (e * 0.8);
    case sel === "bitcoin" && val === "EUR":
      return num * (e * 0.8);
    case sel === "ethereum" && val === "RUB":
      return num * (e * 60);
    case sel === "ethereum" && val === "USD":
      return num * e;
    case sel === "ethereum" && val === "EUR":
      return num * (e * 0.8);
    case sel === "ripple" && val === "RUB":
      return num * (e * 60);
    case sel === "ripple" && val === "USD":
      return num * e;
    case sel === "ripple" && val === "EUR":
      return num * (e * 0.8);
    case sel === "bitcoin-cash" && val === "RUB":
      return num * (e * 60);
    case sel === "bitcoin-cash" && val === "USD":
      return num * e;
    case sel === "bitcoin-cash" && val === "EUR":
      return num * (e * 0.8);
    case sel === "litecoin" && val === "RUB":
      return num * (e * 60);
    case sel === "litecoin" && val === "USD":
      return num * e;
    case sel === "litecoin" && val === "EUR":
      return num * (e * 0.8);
    default:
      return num;
  }
};
