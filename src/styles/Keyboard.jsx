import styled from 'styled-components';
import { BOX_LETTER_BORDER } from './colors';

const KEY_SIZE = '2rem';
const KEY_MARGIN = '0.08rem';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${KEY_SIZE};
  height: calc((3 * ${KEY_SIZE}) + (6 * ${KEY_MARGIN}));
  width: calc((10 * ${KEY_SIZE}) + (20 * ${KEY_MARGIN}));
`;

export const Key = styled.button`
  width: ${({ enter }) => enter ? '4.16rem' : KEY_SIZE};
  height: ${KEY_SIZE};
  border: none;
  border-radius: 5px;
  background-color: ${BOX_LETTER_BORDER};
  font-weight: bold;
  margin: ${({ margin }) => margin ? margin : KEY_MARGIN};
`;