import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import ReactScroll from 'react-scroll';

import { Container, TopHeader, TopHeaderLogo, Navigation, NavItem, Navbar, NavbarLogo, LogoButton } from './header.styles';
import messages from './header.messages';

const NAV_SCROLL_VALUE = 400;

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const goToTop = () => ReactScroll.animateScroll.scrollToTop();

  const handleScroll = () => {
    if (window.scrollY >= NAV_SCROLL_VALUE && !showNav) {
      setShowNav(true);
    }

    if (window.scrollY < NAV_SCROLL_VALUE && !showNav) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const renderNavigation = () => (
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
  );


  return (
    <Container>
      <TopHeader>
        <TopHeaderLogo />
        {renderNavigation()}
      </TopHeader>

      <Navbar display={showNav}>
        <LogoButton type="button" onClick={goToTop} aria-label="Go to top">
          <NavbarLogo />
        </LogoButton>
        {renderNavigation()}
      </Navbar>
    </Container>
  );
};
