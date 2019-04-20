import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import PageSectionHeading from './PageSectionHeading';
import PageSectionSubHeading from './PageSectionSubHeading';

const Section = styled.section`
  text-align: center;
`;

const PageSection = ({ children, clearfix }) => (
  <Section>
    <Container clearfix={clearfix}>
      {children}
    </Container>
  </Section>
);

PageSection.defaultProps = {
  clearfix: false,
};

PageSection.propTypes = {
  clearfix: PropTypes.bool,
};

PageSection.Heading = PageSectionHeading;
PageSection.SubHeading = PageSectionSubHeading;

export default PageSection;
