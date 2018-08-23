import countChar from './bean-counting';

test('counting chars in string', () => {
  expect(countChar('BBC', 'b')).toBe(0);
  expect(countChar('BBC', 'B')).toBe(2);
  expect(countChar('cucumber', 'c')).toBe(2);
});
