import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const InternalLink = styled(({ className, href, to, props, children }) => {
  if (href) {
    return <a className={className} href={href} {...props}>{children}</a>
  } else {
    return <Link className={className} to={to} {...props}>{children}</Link>
  }
})`

`;

export default InternalLink;
