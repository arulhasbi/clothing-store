export const getInventory = async () => {
  const response = await fetch("/inventory");
  const json = await response.json();
  return json;
};
