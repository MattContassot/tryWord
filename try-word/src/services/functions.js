import { WORDS, WORD_LENGTH } from "./constants";

function generateRandomNumber() {
  const min = Math.ceil(0);
  const max = Math.floor(WORDS.length);

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function selectWord() {
  return WORDS[generateRandomNumber()];
}

export function validateWord(word, wordTried, attempt) {
  const wordArray = Array.from(word);
  const attemptId = attempt.substring(7, 8);

  for (let i = 0; i < WORD_LENGTH; i += 1) {
    let currentLetter = '';
    currentLetter = document.querySelector(`#a${attemptId}-l${i + 1}`);
    // reformular como eu verifico se a palavra contém a letra
    if (wordArray[i] === wordTried[i]) {
      currentLetter.classList.add('correctLetter');
      wordArray.splice(i, 1);
      console.log(wordArray);
    }
    else if (wordArray.includes(wordTried[i])) {
      currentLetter.classList.add('letterIncluded');
      wordArray.splice(i, 1);
      console.log(wordArray);
    }
    else currentLetter.classList.add('wrongLetter');
  }
}