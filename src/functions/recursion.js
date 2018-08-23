const isEven = (num) => {
  const n = Math.abs(num);

  if (n === 0) {
    return true;
  } if (n === 1) {
    return false;
  }
  return isEven(n - 2);
};

export default isEven;

isEven(50);
