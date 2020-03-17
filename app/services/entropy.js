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

  let label = 'Very Weak';

  switch (true) {
    case bits >= 256:
      label = 'Very Strong!';
      break;

    case bits >= 128:
      label = 'Strong!';
      break;

    case bits >= 60:
      label = 'Fair';
      break;

    case bits >= 36:
      label = 'Weak';
      break;
  }

  console.log(bits, label);

  return { bits, label };
};
