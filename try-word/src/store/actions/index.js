export const KEY_DOWN = 'KEY_DOWN';

export const setKey = (key) => ({
  type: KEY_DOWN,
  key,
});

export const sendKeyDown = (key) => setKey(key);