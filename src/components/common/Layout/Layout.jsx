import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Normalize from '../Normalize';
import GlobalStyles from '../GlobalStyles';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { animateIn } from '../../../styles/mixins';

const ContentWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  ${animateIn};
`;

const Layout = ({ children, headerProps, footerProps }) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          link={[
            { rel: 'stylesheet', href: 'https://use.typekit.net/uis3gee.css' },
          ]}
          title={data.site.siteMetadata.title}
          meta={[
            { charset: 'utf-8' },
            { content: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'MobileOptimized', content: '320' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Normalize />
        <GlobalStyles />
        <ContentWrapper>
          <PageHeader {...headerProps} />
          {children}
          <PageFooter {...footerProps} />
        </ContentWrapper>
      </>
    )}
  />
);

Layout.defaultProps = {
  headerProps: {},
  footerProps: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  headerProps: PropTypes.object,
  /* eslint-disable-next-line react/forbid-prop-types */
  footerProps: PropTypes.object,
};

export default Layout;
