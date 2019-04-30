import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import xss from 'xss';

import PageSection from '../../common/PageSection';
import { fontSize, media } from '../../../styles/mixins';
import { large, medium, xlLarge } from '../../../styles/variables';

const AboutUsText = styled.div`
  text-align: left;
  margin-bottom: 3em;

  ${media(medium)`
    max-width: 36em;
    margin: 0 auto 4em auto;
  `}

  ${media(xlLarge)`
    float: left;
    max-width: 30em;
    margin-bottom: 0;
  `}

  p {
    margin-bottom: 1.6em;

    ${media(medium)`
      line-height: 1.8em;
    `}
  }

  h3 {
    ${fontSize('18px')};
    line-height: 1.6em;
    margin-bottom: 0.6em;

    ${media(large)`
      ${fontSize('18px')};
      line-height: 1.8em;
    `}
  }
`;

const AboutUsImage = styled.img`
  width: 100%;
  max-width: 706px;
  display: inline-block;

  ${media(xlLarge)`
    float: right;
  `}
`;

const AboutUsSection = ({ frontmatter, html }) => (
  <PageSection clearfix>
    <PageSection.Heading>About Demuxed</PageSection.Heading>
    <AboutUsText dangerouslySetInnerHTML={{ __html: xss(html) }} />
    <AboutUsImage src={frontmatter.image.publicURL} />
  </PageSection>
);

AboutUsSection.propTypes = {
  frontmatter: PropTypes.shape({
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default AboutUsSection;
