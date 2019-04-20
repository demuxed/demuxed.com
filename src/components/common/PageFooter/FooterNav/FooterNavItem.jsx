import styled from 'styled-components';

import { fontSize } from '../../../../styles/mixins';

const FooterNavItem = styled.li`
  ${fontSize('16px')};
  text-transform: uppercase;
  list-style-type: none;
  letter-spacing: 0.1em;
  margin-bottom: 0.4em;
`;

export default FooterNavItem;
