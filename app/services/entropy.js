import {
  lowerCaseCharSet,
  numbersSet,
  symbolsCharSet,
  upperCaseCharSet,
} from './char-sets';

export const calculateEntropy = (
  length,
  withUpperCase,
  withNumbers,
  withSymbols,
) => {
  let charsetPoolSize = lowerCaseCharSet.length;

  if (withUpperCase) {
    charsetPoolSize = charsetPoolSize + upperCaseCharSet.length;
  }

  if (withNumbers) {
    charsetPoolSize = charsetPoolSize + numbersSet.length;
  }

  if (withSymbols) {
    charsetPoolSize = charsetPoolSize + symbolsCharSet.length;
  }

  const bits = Math.floor(Math.log2(Math.pow(charsetPoolSize, length)));

  let label = 'very weak';
  let color = '#C53030';

  switch (true) {
    case bits >= 256:
      label = 'very strong';
      color = '#22543D';
      break;

    case bits >= 128:
      label = 'strong';
      color = '#2F855A';
      break;

    case bits >= 60:
      label = 'fair';
      color = '#48BB78'
      break;

    case bits >= 36:
      label = 'weak';
      color = '#F6E05E';
      break;
  }

  return { color, bits, label };
};
