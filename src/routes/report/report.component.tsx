import React from 'react';

import { Header } from '../../shared/components/header';
import { Footer } from '../../shared/components/footer';
import { ReportSection } from '../../shared/components/reportSection';
import { Container } from './report.styles';

export const Report = () => {
  return (
    <Container>
      <Header />
      <ReportSection />
      <Footer />
    </Container>
  );
};
