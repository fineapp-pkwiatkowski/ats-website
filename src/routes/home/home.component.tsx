import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { Header } from '../../shared/components/header';
import { Hero } from '../../shared/components/hero';
import { InfoSection } from '../../shared/components/infoSection';
import { TilesSection } from '../../shared/components/tilesSection';
import { SliderSection } from '../../shared/sliderSection';
import { ContactSection } from '../../shared/contactSection';
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
      <SliderSection />
      <ContactSection />
    </Container>
  );
};
