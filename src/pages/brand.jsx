import React from 'react';
import styled from 'styled-components';

import Layout from '../components/common/Layout';
import PageSection from '../components/common/PageSection';
import { media } from '../styles/mixins';
import { large, medium } from '../styles/variables';

const BrandGuidelinesContent = styled.div`
  text-align: left;
  max-width: 80%;
  margin: 0 auto;

  h2 {
    padding: 2em 0 1em 0;
  }

  p {
    padding: 1em 0;
  }

  li {
    color: currentColor;
  }
`;

const CardItems = styled.ul`
  margin: 2em auto;
  padding: 0;
  display: flex;
  justify-content: center;

  flex-direction: column;

  ${media(medium)`
    flex-direction: row;
  `}
`;

const Card = styled.li`
  list-style-type: none;
  background-color: #fff;
  padding: 2em 1em;
  margin-bottom: 1em;
  text-align: center;
  flex-direction: column;

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

const CardHeader = styled.h3`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const AboutPage = () => (
  <Layout>
    <PageSection>
      <PageSection.Heading>Brand Guidelines</PageSection.Heading>

      <BrandGuidelinesContent>
        <p>
          We{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          when sponsors and attendees talk about Demuxed! Here are guidelines
          for how to do so and not accidentally make anyone sad. If you have any
          additional questions, don't hesitate to{' '}
          <a href="mailto:info@demuxed.com">reach out</a>.
        </p>
        <h2>The Name</h2>
        <p>Let's get the easiest one out of the way first.</p>
        <CardItems>
          <Card>
            <CardHeader>
              <span role="img" aria-label="Acceptable Uses">
                ✅
              </span>
            </CardHeader>
            Demuxed
          </Card>
          <Card>
            <CardHeader>
              <span role="img" aria-label="Unacceptable Uses">
                🙅‍♀️
              </span>
            </CardHeader>
            DeMuxed, demuxed, deMUXed, DMXD
          </Card>
        </CardItems>
        <h2>Using the Demuxed Brand</h2>
        <p>
          Sponsors and attendees are welcome to use the Demuxed logo when
          talking about attending or sponsoring the conference. The Demuxed
          branding may not be used in a way that implies any relationship beyond
          a role as an attendee or sponsoring entity.
        </p>
        <CardItems>
          <Card>
            <CardHeader>
              <span role="img" aria-label="Acceptable Uses">
                ✅
              </span>
            </CardHeader>
            Tweet (or whatever the new, popular, social site is): "We'll be at
            Demuxed 2019 [dates]!" with a Demuxed logo attached.
          </Card>
          <Card>
            <CardHeader>
              <span role="img" aria-label="Unacceptable Uses">
                🙅‍♀️
              </span>
            </CardHeader>
            Signs or other branding that's designed to look like Demuxed is
            specifically endorsing a product, giveaway, or company.
          </Card>
        </CardItems>

        <h2>Logo</h2>
        <p>
          When using the primary logo, whenever possible, use the full color
          logo. If referencing a specific satellite event, make sure to use the
          logo specific to that event. Give the logo room to breath (padding).
          Please don't modify the logo in any way.
        </p>
        <p>
          You can find our current public design assets on{' '}
          <a href="https://www.dropbox.com/sh/4kd3k5p53lo5rre/AABarOXEEZD_dPR3WgChNSjFa?dl=0">
            Dropbox
          </a>
          .
        </p>
      </BrandGuidelinesContent>
    </PageSection>
  </Layout>
);

export default AboutPage;
