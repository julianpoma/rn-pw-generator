import {
  lowerCaseCharSet,
  numbersSet,
  symbolsCharSet,
  upperCaseCharSet,
} from './char-sets';
import { calculateEntropy } from './entropy';

export const generatePassword = (
  length = 8,
  withUpperCase = false,
  withNumbers = false,
  withSymbols = false,
) => {
  let dictionary = [...lowerCaseCharSet];

  if (withUpperCase) {
    dictionary.push(...upperCaseCharSet);
  }

  if (withNumbers) {
    dictionary.push(...numbersSet);
  }

  if (withSymbols) {
    dictionary.push(...symbolsCharSet);
  }

  const password = [...Array(length).keys()].map(() =>
    getRandomChar(fisherYatesShuffle(dictionary)),
  );

  return {
    ...calculateEntropy(
      password.length,
      withUpperCase,
      withNumbers,
      withSymbols,
    ),
    password: password.join(''),
  };
};

const getRandomChar = dictionary => {
  const index = Math.floor(Math.random() * (dictionary.length + 1));
  return dictionary[index];
};

/**
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
const fisherYatesShuffle = dictionary => {
  const a = [...dictionary];
  let j,
    temp = null;

  for (let i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }

  return a;
};
