export default (number, decimal = 2) => {
  const num = number.toFixed(decimal).split('.');
  const integer = num[0];
  return `${integer}.${num[1]}`;
};
