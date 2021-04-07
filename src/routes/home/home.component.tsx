import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { Header } from '../../shared/components/header';
import { Hero } from '../../shared/components/hero';
import { InfoSection } from '../../shared/components/infoSection';
import { TilesSection } from '../../shared/components/tilesSection';
import { ContactSection } from '../../shared/components/contactSection';
import { AboutSection } from '../../shared/aboutSection';
import { LogoSection } from '../../shared/logoSection';
import { Footer } from '../../shared/components/footer';
import { Cookies } from '../../shared/components/cookies';
import { Container } from './home.styles';

export const Home = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'Automation Technology Solutions',
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
      <Cookies />
    </Container>
  );
};
