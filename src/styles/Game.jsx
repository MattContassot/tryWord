import styled from 'styled-components';
import { BOX_LETTER_BORDER, BACKGROUND_COLOR } from './colors';

const LETTER_SIZE = '2.15rem';
const LETTER_MARGIN = '0.15rem';
const LETTER_BORDER = '0.3rem';

export const Main = styled.main`
  margin-top: 2rem;
  height: calc((6 * ${LETTER_SIZE}) + (12 * ${LETTER_MARGIN}) + (12 * ${LETTER_BORDER}));
  width: calc((6 * ${LETTER_SIZE}) + (12 * ${LETTER_MARGIN}) + (12 * ${LETTER_BORDER}));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Attempt = styled.form`
  display: flex;
  justify-content: center;
`;

export const WordBox = styled.input`
  border: solid ${BOX_LETTER_BORDER} ${LETTER_BORDER};
  border-radius: 5px;
  height: ${LETTER_SIZE};
  width: ${LETTER_SIZE};
  margin: ${LETTER_MARGIN};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  background-color: ${BACKGROUND_COLOR};
  outline: none;
`;
