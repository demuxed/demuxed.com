import styled, { css } from 'styled-components';

import { clearfix, media } from '../../../styles/mixins';
import { large, maxWidth } from '../../../styles/variables';

const Container = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  position: relative;
  padding: 3em 2em;

  ${props => props.clearfix && css`
    ${clearfix}

    ${media(large)`
      padding: 4em 2em;
    `}
  `}
`;

export default Container;
