const truncate = (text) => {
  return `${text.substring(0, 70)}...`;
};

const truncateTitle = (text) => {
  if (text.length < 30) return text;
  return `${text.substring(0, 30)}...`;
};
export { truncate, truncateTitle };
