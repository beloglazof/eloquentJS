import isEven from './recursion';

test('define number is even or odd', () => {
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(50)).toBe(true);
  expect(isEven(75)).toBe(false);
  expect(isEven(-1)).toBe(false);
  expect(isEven(-2)).toBe(true);
});
