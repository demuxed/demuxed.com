import styled from 'styled-components';

import FooterNavLink from './FooterNavLink';
import FooterNavTitle from './FooterNavTitle';
import { media } from '../../../../styles/mixins';
import {
  large, medLarge, medium, wide,
} from '../../../../styles/variables';

const FooterNav = styled.ul`
  margin-bottom: 2em;
        
  ${media(medium)`
    display: inline-block;
    vertical-align: top;
    margin-right: 2em;
  `}
  
  ${media(medLarge)`
    margin-right: 3em;
  `}
  
  ${media(large)`
    margin-right: 4em;
  `}
  
  ${media(wide)`
    margin-right: 6em;
  `}
`;

FooterNav.Title = FooterNavTitle;
FooterNav.Link = FooterNavLink;

export default FooterNav;
