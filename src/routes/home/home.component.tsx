import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';

import {
  Container,
  Header,
  Logo,
  InfoContainer,
  Divider,
  InfoRow,
  Icon,
  Email,
  Phone,
  Address,
  Info,
  UnderConstructionInfo
} from './home.styles';

export const Home = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          defaultMessage: 'Automation Technology Solutions',
        })}
      />

      <LanguageSwitcher />

      <Header>
        <Logo />
        <UnderConstructionInfo>
          <FormattedMessage id="page.underConstruction" defaultMessage="Strona w budowie" />
        </UnderConstructionInfo>
      </Header>



      <InfoContainer>
        <InfoRow>
          <Icon>
            <PhoneIcon fontSize="small" />
          </Icon>
          <Email href="mailto:biuro@e-ats.pl">biuro@e-ats.pl</Email>
        </InfoRow>

        <InfoRow>
          <Icon>
            <EmailIcon fontSize="small" />
          </Icon>
          <Phone href="tel:+48602119684">+48 602 119 684</Phone>
        </InfoRow>

        <InfoRow>
          <Icon>
            <LocationOnIcon fontSize="small" />
          </Icon>
          <Address>Os. Zacisze 8/1<br />64-700 Czarnków, <span><FormattedMessage id="page.info.country" defaultMessage="Polska" /></span></Address>
        </InfoRow>
        <Divider />
      </InfoContainer>

      <Info>
        <a href="./ats-prezentacja.pdf" download="ats-prezentacja.pdf">
          <FormattedMessage id="page.info.downloadLink" defaultMessage="Kliknij tutaj" />
        </a>
        <FormattedMessage id="page.info.downloadText" defaultMessage=", aby pobrać prezentację ATS" />
      </Info>

    </Container>
  );
};
