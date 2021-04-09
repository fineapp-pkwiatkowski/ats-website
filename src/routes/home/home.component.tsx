import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useSpring, config } from 'react-spring';

import { Header } from '../../shared/components/header';
import { Hero } from '../../shared/components/hero';
import { InfoSection } from '../../shared/components/infoSection';
import { TilesSection } from '../../shared/components/tilesSection';
import { ContactSection } from '../../shared/components/contactSection';
import { AboutSection } from '../../shared/aboutSection';
import { LogoSection } from '../../shared/logoSection';
import { Footer } from '../../shared/components/footer';
import { Container } from './home.styles';

export const Home = () => {
  const intl = useIntl();
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.molasses,
  });

  return (
    <Container style={animationProps}>
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
