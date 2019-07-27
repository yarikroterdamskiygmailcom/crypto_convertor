const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case "CRYPTO_LIST_SUCCESS":
      return payload;
    default:
      return state;
  }
};
