export const getInventory = async () => {
  const response = await fetch("/inventory");
  const json = await response.json();
  return json;
};

export const getCurrency = async () => {
  const response = await fetch("/currency");
  const json = await response.json();
  return json;
};

export const getConvert = async (amount, to) => {
  let url = `https://api.exchangerate.host/convert?from=USD&to=${to}&amount=${amount}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
