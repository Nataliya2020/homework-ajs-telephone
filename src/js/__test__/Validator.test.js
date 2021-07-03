import Validator from '../Validator';

test('adjusting the phone number from 8', () => {
  expect(new Validator().validateTel('8 (927) 000-00-00 ')).toBe('+79270000000');
});

test('adjusting the phone number from +7', () => {
  expect(new Validator().validateTel('+7 960 000 00 00')).toBe('+79600000000');
});

test('adjusting the phone number from +8', () => {
  expect(new Validator().validateTel('+86 000 000 0000')).toBe('+860000000000');
});

test('adjusting the phone number from +8', () => {
  expect(new Validator().validateTel('+86 000 000 0000')).toBe('+860000000000');
});

test('checking the number for the correctness of the first digit without a plus', () => {
  expect(() => new Validator().validateTel('9 000 000 0000')).toThrowError(new Error('Номер должен начинаться с +7, 8 или +8'));
});

test('checking the number for the correctness of the first digit with a plus', () => {
  expect(() => new Validator().validateTel('+9 000 000 0000')).toThrowError(new Error('Номер должен начинаться с +7, 8 или +8'));
});
