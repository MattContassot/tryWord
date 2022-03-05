export const KEY_DOWN = 'KEY_DOWN';
export const LAST_LETTER = 'LAST_LETTER';

export const setKey = (key) => ({
  type: KEY_DOWN,
  key,
});

export const lastLetter = (payload) => ({
  type: LAST_LETTER,
  payload,
})

export const sendKeyDown = (key) => setKey(key);
export const enableEnter = (payload) => lastLetter(payload);