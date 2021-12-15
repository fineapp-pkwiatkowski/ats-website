import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { useLocation } from 'react-router-dom';
import ReactScroll from 'react-scroll';
import { Header } from '../../shared/components/header';
import { Hero } from '../../shared/components/hero';
import { InfoSection } from '../../shared/components/infoSection';
import { TilesSection } from '../../shared/components/tilesSection';
import { ContactSection } from '../../shared/components/contactSection';
import { AboutSection } from '../../shared/aboutSection';
import { LogoSection } from '../../shared/logoSection';
import { Footer } from '../../shared/components/footer';
import { SCROLL_OFFSET_VALUE, SCROLL_OFFSET_VALUE_MOBILE } from '../../shared/components/header/header.component';
import { useBreakpoint } from '../../shared/hooks/useBreakpoint';
import { Container } from './home.styles';

export const Home = () => {
  const intl = useIntl();
  const breakpoint = useBreakpoint();
  const location = useLocation();

  const SCROLL_PROPS = {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: breakpoint.isDesktop ? SCROLL_OFFSET_VALUE : SCROLL_OFFSET_VALUE_MOBILE,
  };

  useEffect(() => {
    if (location.state) {
      ReactScroll.scroller.scrollTo(location.state as string, SCROLL_PROPS);
    }
  }, [location.state]);

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'Automation Technology Solutions - Nasze rozwiązania stworzone dla potrzeb Twojej firmy',
        })}
      />

      <Header />
      <Hero />
      <InfoSection />
      <TilesSection />
      <AboutSection />
      <LogoSection />
      <ContactSection />
      <Footer />
    </Container>
  );
};
