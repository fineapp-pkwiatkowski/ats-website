import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import ReactScroll from 'react-scroll';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';
import { useClickAway, useLockBodyScroll } from 'react-use';
import { useSpring } from 'react-spring';

import { localesSelectors } from '../../../modules/locales';
import { ACTIVITY_SECTION_NAME } from '../tilesSection/tilesSection.component';
import { ABOUT_SECTION_NAME } from '../../aboutSection/aboutSection.component';
import { CONTACT_SECTION_NAME } from '../contactSection/contactSection.component';
import { useLanguageRouter } from '../languageSwitcher/useLanguageRouter.hook';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import messages from './header.messages';
import {
  Container,
  TopHeader,
  TopHeaderLogo,
  Navigation,
  NavItem,
  Navbar,
  NavbarLogo,
  LogoButton,
  CircleFlag,
  LanguageItem,
  Label,
  DropdownIcon,
  LanguageDropdown,
  Language,
  NavbarContent,
  LanguageOverlay,
  MobileNavbar,
  MobileLogo,
  DummyMobileNavbar,
  BurgerButton,
  NavMenu,
} from './header.styles';

const NAV_SCROLL_VALUE = 400;
const NAV_SCROLL_VALUE_MOBILE = 20;
export const SCROLL_OFFSET_VALUE = -100;
export const SCROLL_OFFSET_VALUE_MOBILE = -60;

const languageOptions = {
  PL: {
    title: 'Wybierz język',
    ariaLabel: 'Język polski',
    countryCode: 'pl',
    countryLabel: 'PL',
  },
  EN: {
    title: 'Select language',
    ariaLabel: 'English language',
    countryCode: 'gb',
    countryLabel: 'EN',
  },
};

export const goToTop = () => ReactScroll.animateScroll.scrollToTop();

export const Header = () => {
  const intl = useIntl();
  const breakpoint = useBreakpoint();
  const dropdownRef = useRef(null);
  const [, changeLanguage] = useLanguageRouter();
  const selectedLanguage = useSelector(localesSelectors.selectLocalesLanguage);
  const [showNav, setShowNav] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  useLockBodyScroll(scrollLocked);

  const SCROLL_PROPS = {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: breakpoint.isDesktop ? SCROLL_OFFSET_VALUE : SCROLL_OFFSET_VALUE_MOBILE,
  };

  const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);
  const toggleNavMobileOpen = () => setMobileNavOpen(!mobileNavOpen);

  useClickAway(dropdownRef, (e: any) => {
    const toggleSelected = e.target.classList.contains('lang-select');
    if (showLanguageDropdown && !toggleSelected) {
      setShowLanguageDropdown(false);
    }
  });

  useEffect(() => {
    setScrollLocked(mobileNavOpen);
  }, [mobileNavOpen, setScrollLocked]);

  useEffect(() => {
    setShowLanguageDropdown(false);
  }, [showNav, setShowNav]);

  const handleScroll = () => {
    if (breakpoint.isDesktop) {
      if (window.scrollY >= NAV_SCROLL_VALUE && !showNav) {
        setShowNav(true);
      }

      if (window.scrollY < NAV_SCROLL_VALUE && !showNav) {
        setShowNav(false);
      }
    } else {
      if (window.scrollY >= NAV_SCROLL_VALUE_MOBILE && !scrolledNav) {
        setScrolledNav(true);
      }

      if (window.scrollY < NAV_SCROLL_VALUE_MOBILE && !scrolledNav) {
        setScrolledNav(false);
      }
    }
  };

  useEffect(() => {
    if (breakpoint.isDesktop) {
      if (window.scrollY >= NAV_SCROLL_VALUE && !showNav) {
        setShowNav(true);
      }
    } else {
      if (window.scrollY >= NAV_SCROLL_VALUE_MOBILE && !scrolledNav) {
        setScrolledNav(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderLanguageSelect = (white = false, mobile = false) => {
    const langOptions = selectedLanguage === 'pl' ? languageOptions.PL : languageOptions.EN;

    return (
      <LanguageItem
        role="button"
        title={langOptions.title}
        aria-label={langOptions.ariaLabel}
        onClick={toggleLanguageDropdown}
        active={showLanguageDropdown}
        white={white}
      >
        <Label white={white}>{langOptions.countryLabel}</Label>
        <CircleFlag countryCode={langOptions.countryCode} />
        <DropdownIcon>
          <ArrowDropDownIcon fontSize="small" />
        </DropdownIcon>
        <LanguageOverlay className="lang-select" />
        {renderLanguageDropdown()}
      </LanguageItem>
    );
  };

  const renderLanguageDropdown = () => {
    return (
      <LanguageDropdown ref={dropdownRef} visibile={showLanguageDropdown}>
        <Language
          type="button"
          title={intl.formatMessage(messages.polishLanguageTitle)}
          onClick={() => changeLanguage('pl')}
        >
          <Label>PL</Label>
          <CircleFlag countryCode="pl" title={intl.formatMessage(messages.polishLanguageTitle)} />
          <LanguageOverlay className="lang-select" />
        </Language>
        <Language
          type="button"
          title={intl.formatMessage(messages.englishLanguageTitle)}
          onClick={() => changeLanguage('en')}
        >
          <Label>EN</Label>
          <CircleFlag countryCode="gb" title={intl.formatMessage(messages.englishLanguageTitle)} />
          <LanguageOverlay className="lang-select" />
        </Language>
      </LanguageDropdown>
    );
  };

  const handleNavItemLink = (sectionId: string) => {
    !breakpoint.isDesktop && setMobileNavOpen(false);
    ReactScroll.scroller.scrollTo(sectionId, SCROLL_PROPS);
  };

  const renderNavigation = (white = false) => (
    <Navigation open={!breakpoint.isDesktop && mobileNavOpen}>
      <NavItem white={white} onClick={() => handleNavItemLink(ACTIVITY_SECTION_NAME)}>
        <FormattedMessage {...messages.activityLink} />
      </NavItem>
      <NavItem white={white} onClick={() => handleNavItemLink(ABOUT_SECTION_NAME)}>
        <FormattedMessage {...messages.aboutLink} />
      </NavItem>
      <NavItem white={white} onClick={() => handleNavItemLink(CONTACT_SECTION_NAME)}>
        <FormattedMessage {...messages.contactLink} />
      </NavItem>
      {renderLanguageSelect(white)}
    </Navigation>
  );

  const renderBurgerMenuButton = () => (
    <BurgerButton white={scrolledNav && !mobileNavOpen} open={mobileNavOpen} onClick={toggleNavMobileOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </BurgerButton>
  );

  const renderMobileHeader = () => (
    <>
      <DummyMobileNavbar />
      <MobileNavbar scrolled={scrolledNav}>
        <LogoButton type="button" onClick={goToTop} aria-label={intl.formatMessage(messages.logoAriaLabelGoTop)}>
          <MobileLogo white={scrolledNav && !mobileNavOpen} />
        </LogoButton>
        {renderBurgerMenuButton()}
        <NavMenu open={mobileNavOpen}>{renderNavigation(false)}</NavMenu>
      </MobileNavbar>
    </>
  );

  const renderDesktopHeader = () => (
    <Container>
      <TopHeader>
        <TopHeaderLogo />
        {renderNavigation()}
      </TopHeader>

      <Navbar visibile={showNav}>
        <NavbarContent>
          <LogoButton type="button" onClick={goToTop} aria-label={intl.formatMessage(messages.logoAriaLabelGoTop)}>
            <NavbarLogo />
          </LogoButton>
          {renderNavigation(true)}
        </NavbarContent>
      </Navbar>
    </Container>
  );

  const renderHeader = () => {
    if (breakpoint.isDesktop) {
      return renderDesktopHeader();
    } else {
      return renderMobileHeader();
    }
  };

  return renderHeader();
};
