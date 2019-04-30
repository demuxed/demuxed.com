import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import xss from 'xss';

import List from '../../common/List';
import { fontSize, media } from '../../../styles/mixins';
import { large, medium, small } from '../../../styles/variables';

const StyledListItem = styled(List.Item)`
  list-style-type: none;
  margin-bottom: 2em;
  
  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    padding: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(large)`
    width: 24%;
    padding-left: 2%;
    padding-right: 2%;        
    margin-bottom: 2em;
  `}
`;

const Image = styled.img`
  margin-bottom: 1em;
`;

const Title = styled.h3`
  ${fontSize('16px')}
  line-height: 1.2em;
  margin-bottom: 0.3em;
  text-transform: uppercase;
  
  ${media(medium)`
    ${fontSize('17px')}
    line-height: 1.4em;
    margin-bottom: 0.6em;
  `}
`;

const Text = styled.div`
  p {
    ${media(medium)`
      line-height: 1.7em;
    `}
  }
`;

const GuidingPrincipleItem = ({ frontmatter, html }) => (
  <StyledListItem>
    <Image src={frontmatter.image.publicURL} />
    <Title>{frontmatter.title}</Title>
    <Text dangerouslySetInnerHTML={{ __html: xss(html) }} />
  </StyledListItem>
);

GuidingPrincipleItem.propTypes = {
  frontmatter: PropTypes.shape({
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default GuidingPrincipleItem;
