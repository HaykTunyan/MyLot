export const formatNumberWithCharacter = (num) => {
  if (num === undefined) {
    return "";
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
