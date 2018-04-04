import React from 'react';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

const InternalLink = styled(({ className, href, to, children, ...props }) => {
  if (href) {
    return <OutboundLink className={className} href={href} {...props}>{children}</OutboundLink>
  } else {
    return <Link className={className} to={to} {...props}>{children}</Link>
  }
})`
  color: ${props => props.theme.secondaryText};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default InternalLink;
