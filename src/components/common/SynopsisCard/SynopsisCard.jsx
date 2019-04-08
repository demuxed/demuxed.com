import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import Button from '../Button';
import Link from '../Link';
import List from '../List';
import {
  brandPink,
  brandTextGrey,
  medLarge,
  small,
} from '../../../styles/variables';
import { fontSize, media } from '../../../styles/mixins';

const StyledListItem = styled(List.Item)`
  list-style-type: none;
  text-align: left;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 2px solid ${lighten(0.36, brandTextGrey)};

  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(medLarge)`
    width: 35%;
    margin-right: 5%;
    margin-left: 5%;
    padding-bottom: 3em;      
    margin-bottom: 3em;
  `}
`;

const Heading = styled.h3`
  ${fontSize('16px')};
  line-height: 1.4em;
  margin-bottom: 0.5em;
`;

const SubHeading = styled.h4`
  ${fontSize('14px')};
  line-height: 1.6em;
  margin-bottom: 0.8em;
  display: block;
  color: ${brandPink};
  text-transform: uppercase;
`;

const Text = styled.div`
  p {
    line-height: 1.6em;
    margin-bottom: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 6em;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.6em 3em;
`;

const SynopsisCard = ({
  heading, subHeading, html, url,
}) => (
  <StyledListItem>
    <Heading>{heading}</Heading>
    <SubHeading>{subHeading}</SubHeading>
    <Text dangerouslySetInnerHTML={{ __html: html }} />
    <StyledButton as={Link} to={url}>
      View Full
    </StyledButton>
  </StyledListItem>
);

SynopsisCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SynopsisCard;
