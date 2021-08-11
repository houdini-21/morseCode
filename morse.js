function decode(str) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    ' ',
  ];
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
    '.----',
    '..---',
    '...--',
    '....-',
    '.....',
    '-....',
    '--...',
    '---..',
    '----.',
    '-----',
  ];
  const strArray = str.split(' ');
  let morseWord = '';
  if (str !== '') {
    for (let i = 0; i < strArray.length; i++) {
      let indexLetters =
        morse.indexOf(strArray[i]) !== -1 ? morse.indexOf(strArray[i]) : 36;
      morseWord = morseWord + letters[indexLetters];
    }
  }

  return morseWord;
}
console.log(decode('-.- ..- - --- ...  --. --- .-. -.. --- -..- -..'));

function encode(str) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    ' ',
  ];
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
    '.----',
    '..---',
    '...--',
    '....-',
    '.....',
    '-....',
    '--...',
    '---..',
    '----.',
    '-----',
    ' ',
  ];
  const strArray = str.split('');
  let morseWord = '';
  if (str !== '') {
    for (let i = 0; i < strArray.length; i++) {
      let indexLetters =
        letters.indexOf(strArray[i]) !== -1 ? letters.indexOf(strArray[i]) : 36;
      morseWord = morseWord + morse[indexLetters] + ' ';
    }
  }

  return morseWord;
}
console.log(encode('kutos gordoxd'));
