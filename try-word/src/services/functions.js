import { WORDS, WORD_LENGTH } from "./constants";

function generateRandomNumber() {
  const min = Math.ceil(0);
  const max = Math.floor(WORDS.length - 1);

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function selectWord() {
  return WORDS[generateRandomNumber()];
}

export function validateWord(word, wordTried, attempt) {
  console.log(word);
  const wordArray = Array.from(word);
  const attemptId = attempt.substring(7, 8);
  let wordIncluded = wordArray;

  for (let i = 0; i < WORD_LENGTH; i += 1) {
    let currentLetter = '';
    let letterOnKeyboard = '';

    currentLetter = document.querySelector(`#a${attemptId}-l${i + 1}`);
    letterOnKeyboard = document.querySelector(`#${currentLetter.value}`);

    console.log(`
      Letra atual ${wordTried[i]}
      Palavra correta ${wordArray}
      Letras included ${wordIncluded}
    `);

    if (!wordArray.includes(wordTried[i])) {
      currentLetter.classList.add('wrongLetter');
      letterOnKeyboard.classList.add('wrongLetter');
      letterOnKeyboard.disabled = true;      
    }

    else if (wordArray[i] === wordTried[i]) {
      currentLetter.classList.add('correctLetter');
      wordArray.splice(i, 1, '*');
    }

    else {
      if (wordIncluded.includes(wordTried[i])) {
        currentLetter.classList.add('letterIncluded');
        letterOnKeyboard.classList.add('letterIncluded');
        wordIncluded.splice(wordIncluded.indexOf(wordTried[i]), 1, '*');
      }
    }
  }
}

export const focusNextLetter = (currentLetter) => {
  const onFocus = document.querySelector('.letterOnFocus');
  onFocus.classList.remove('letterOnFocus');

  const lastNumberId = Number(currentLetter.substring(4, 5)) + 1;
  let nextLetter = document.querySelector(`#${currentLetter.substring(0, 4) + lastNumberId}`);

  if (lastNumberId > 5) {
    const nextAttempt = Number(currentLetter.substring(1, 2)) + 1;
    nextLetter = document.querySelector(`#a${nextAttempt}-l1`);
  }

  if (currentLetter === 'a6-l5') return console.log('chamar o placar');

  nextLetter.classList.add('letterOnFocus');

  return nextLetter.focus();
};