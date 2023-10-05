import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';

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

const LearningHeader = ({ intl, showUserDropdown }) => {
  const { authenticatedUser } = useContext(AppContext);

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>
      <div className="container-xl py-2 d-flex align-items-center">
        <img className="d-block" src="/logo.svg" alt="Comet ML" />
        {showUserDropdown && authenticatedUser && (
        <AuthenticatedUserDropdown
          username={authenticatedUser.username}
        />
        )}
        {showUserDropdown && !authenticatedUser && (
        <AnonymousUserMenu />
        )}
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  showUserDropdown: true,
};

export default injectIntl(LearningHeader);
