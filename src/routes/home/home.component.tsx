import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';

import LogoImage from '../../images/ats-logo.png';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, Logo } from './home.styles';

export const Home = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'Automation Technology Solutions',
        })}
      />

      <Logo src={LogoImage} />
      <LanguageSwitcher />

      <p>
        <FormattedMessage id="page.underConstruction" defaultMessage="Strona w budowie" />
      </p>
    </Container>
  );
};
