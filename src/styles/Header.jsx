import styled from 'styled-components';
import { ICON_COLOR } from './colors';

const ICON_SIZE = '1.5rem';
const ICON_MARGIN = '0.15rem';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const H1 = styled.h1`
  text-align: center;
  width: calc(100% - (4 * ${ICON_SIZE}) - (8 * ${ICON_MARGIN}));
`;

export const P = styled.p`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  margin: 0 ${ICON_MARGIN};
  margin-right: ${({ help }) => help ? '1.95rem' : ICON_MARGIN};
  color: ${ICON_COLOR};
  border: solid ${ICON_COLOR} 2px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;