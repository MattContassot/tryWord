export const KEY_DOWN = 'KEY_DOWN';
export const LAST_LETTER = 'LAST_LETTER';

export const setKey = (key) => ({
  type: KEY_DOWN,
  key,
});

export const lastLetter = () => ({
  type: LAST_LETTER,
})

export const sendKeyDown = (key) => setKey(key);
export const enableEnter = () => lastLetter();