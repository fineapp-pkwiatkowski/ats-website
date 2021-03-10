import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, TopHeader, TopHeaderLogo, Navigation, NavItem } from './header.styles';
import messages from './header.messages';

export const Header = () => {
  return (
    <Container>
      <TopHeader>
        <TopHeaderLogo />
        <Navigation>
          <NavItem>
            <FormattedMessage {...messages.activityLink} />
          </NavItem>
          <NavItem>
            <FormattedMessage {...messages.aboutLink} />
          </NavItem>
          <NavItem>
            <FormattedMessage {...messages.contactLink} />
          </NavItem>
        </Navigation>
      </TopHeader>
    </Container>
  );
};
