/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import PageSection from '../../common/PageSection';
import List from '../../common/List';
import GuidingPrincipleItem from './GuidingPrincipleItem';

const GuidingPrinciplesSection = ({ principles }) => (
  <PageSection>
    <PageSection.Heading>Our Guiding Principles</PageSection.Heading>
    <List>
      {principles.map((item, i) => <GuidingPrincipleItem key={i} {...item} />)}
    </List>
  </PageSection>
);

GuidingPrinciplesSection.propTypes = {
  principles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GuidingPrinciplesSection;
