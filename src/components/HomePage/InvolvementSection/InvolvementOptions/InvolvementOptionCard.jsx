import styled from 'styled-components';

import Button from '../../../common/Button';
import List from '../../../common/List';
import { fontSize, media } from '../../../../styles/mixins';
import { defaultSerif, large, medium } from '../../../../styles/variables';

const InvolvementOptionCard = styled(List.Item)`
  list-style-type: none;
  background-color: #fff; 
  padding: 2em 1em;
  margin-bottom: 1em;
  
  ${media(medium)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(large)`
    width: 28%;
    margin-right: 2%;
    margin-left: 2%;
    padding: 2em;
    min-height: 8.4em;
  `}
`;

const InvolvementOptionCardImage = styled.img`
  margin-bottom: 2em;
`;

const InvolvementOptionCardHeading = styled.h3`
  ${fontSize('14px')};
  font-family: ${defaultSerif};
  font-weight: 500;
  line-height: 1.6em;
  margin-bottom: 0.8em;
`;

const InvolvementOptionCardButton = styled(Button)`
  padding: 0.6em 3em;
`;

InvolvementOptionCard.Image = InvolvementOptionCardImage;
InvolvementOptionCard.Heading = InvolvementOptionCardHeading;
InvolvementOptionCard.Button = InvolvementOptionCardButton;

export default InvolvementOptionCard;
