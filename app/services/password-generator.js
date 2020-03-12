import { flatten } from 'lodash';

const numbersSet = '0123456789';
const lowerCaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseCharSet = lowerCaseCharSet.toUpperCase();
const symbolsCharSet = "!@#$%^&*()_+=[]'/-<>";

export const passwordGenerator = (
  lowerCase = true,
  upperCase = true,
  numbers = false,
  symbols = false,
  length = 8,
) => {
  let dictionary = [];
  const password = [];

  if (lowerCase) {
    dictionary.push(lowerCaseCharSet);
  }

  if (upperCase) {
    dictionary.push(upperCaseCharSet);
  }

  if (numbers) {
    dictionary.push(numbersSet);
  }

  if (symbols) {
    dictionary.push(symbolsCharSet);
  }

  dictionary = flatten(dictionary);

  return password.join();
};
