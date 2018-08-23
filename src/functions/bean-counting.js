const countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length - 1; i += 1) {
    const element = str[i];

    if (element === char) {
      counter += 1;
    }
  }

  return counter;
};

export default countChar;
