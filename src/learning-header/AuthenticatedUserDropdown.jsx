import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@edx/paragon';

import messages from './messages';

const AuthenticatedUserDropdown = ({ intl, username }) => (
  <Dropdown className="user-dropdown ml-3">
    <Dropdown.Toggle variant="outline-primary">
      <FontAwesomeIcon icon={faUserCircle} className="d-md-none" size="lg" />
      <span data-hj-suppress className="d-none d-md-inline">
        {username}
      </span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-right">
      <Dropdown.Item href={getConfig().LOGOUT_URL}>
        {intl.formatMessage(messages.signOut)}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
};

export default injectIntl(AuthenticatedUserDropdown);
