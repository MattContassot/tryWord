export const KEY_DOWN = 'KEY_DOWN';
export const LAST_LETTER = 'LAST_LETTER';
export const RENDER_HELP = 'RENDER_HELP';
export const RENDER_STATS = 'RENDER_STATS';
export const RENDER_SETTINGS = 'RENDER_SETTINGS';

export const setKey = (key, virtualKeyboard) => ({
  type: KEY_DOWN,
  key,
  virtualKeyboard,
});

export const lastLetter = (payload) => ({
  type: LAST_LETTER,
  payload,
})

export const renderingHelp = (payload) => ({
  type: RENDER_HELP,
  payload,
})

export const renderingStats = (payload) => ({
  type: RENDER_STATS,
  payload,
})

export const renderingSettings = (payload) => ({
  type: RENDER_SETTINGS,
  payload,
})

export const sendKeyDown = (key, virtualKeyboard = false) => setKey(key, virtualKeyboard);

export const enableEnter = (payload) => lastLetter(payload);

export const renderHelp = (payload) => renderingHelp(payload);
export const renderStats = (payload) => renderingStats(payload);
export const renderSettings = (payload) => renderingSettings(payload);