import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const isExternalUrl = url => /^(?:(?:https?)|(?:mailto)|(?:ftp)|(?:tel)):/.test(url);

const Link = ({
  children, to, activeClassName, icon, ...restProps
}) => {
  const isExternal = isExternalUrl(to);

  if (isExternal) {
    return (
      <a href={to} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink to={to} activeClassName={activeClassName} {...restProps}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  /* eslint-disable-next-line react/require-default-props */
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default Link;
