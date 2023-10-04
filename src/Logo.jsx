import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, ...attributes }) => (
  <img src="https://www.comet.com/site/wp-content/uploads/2022/05/comet-logo.svg" alt={alt} {...attributes} />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LinkedLogo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} {...attributes}>
    <img className="d-block" src={src} alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { LinkedLogo, Logo };
export default Logo;
