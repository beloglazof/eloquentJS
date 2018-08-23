let str = '';
const strLength = 8 * 8;
const hash = '#';
const space = ' ';
const newLine = '\n';

const oddRow = (length) => {
  let odd = '';
  while (odd.length < length) {
    odd += hash + space;
  }
  return odd + newLine;
};

const evenRow = (length) => {
  let even = '';
  while (even.length < length) {
    even += space + hash;
  }
  return even + newLine;
};

while (str.length < strLength) {
  str += oddRow(8) + evenRow(8);
}

console.log(str);
