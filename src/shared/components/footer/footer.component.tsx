import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import ReactScroll from 'react-scroll';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import contactMessages from '../contactSection/contactSection.messages';
import headerMessages from '../header/header.messages';
import { goToTop, SCROLL_OFFSET_VALUE, SCROLL_OFFSET_VALUE_MOBILE } from '../header/header.component';
import { ACTIVITY_SECTION_NAME } from '../tilesSection/tilesSection.component';
import { CONTACT_SECTION_NAME } from '../contactSection/contactSection.component';
import { ABOUT_SECTION_NAME } from '../../aboutSection/aboutSection.component';
import { PARTNERSHIP_SECTION_NAME } from '../../logoSection/logoSection.component';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import messages from './footer.messages';
import {
  Container,
  Content,
  Logo,
  GoTop,
  Copyright,
  ColumnContainer,
  Column,
  FooterNavLink,
  FooterColumnItem,
} from './footer.styles';

const date = new Date();

export const Footer = () => {
  const intl = useIntl();
  const breakpoint = useBreakpoint();

  const SCROLL_PROPS = {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: breakpoint.isDesktop ? SCROLL_OFFSET_VALUE : SCROLL_OFFSET_VALUE_MOBILE,
  };

  return (
    <Container>
      <Content>
        <Logo />

        <Copyright>{`© ${date.getFullYear()} ATS sp. z o.o.`}</Copyright>

        <ColumnContainer>
          <Column>
            <FooterNavLink onClick={() => ReactScroll.scroller.scrollTo(ACTIVITY_SECTION_NAME, SCROLL_PROPS)}>
              <FormattedMessage {...headerMessages.activityLink} />
            </FooterNavLink>
            <FooterNavLink onClick={() => ReactScroll.scroller.scrollTo(ABOUT_SECTION_NAME, SCROLL_PROPS)}>
              <FormattedMessage {...headerMessages.aboutLink} />
            </FooterNavLink>
            <FooterNavLink onClick={() => ReactScroll.scroller.scrollTo(PARTNERSHIP_SECTION_NAME, SCROLL_PROPS)}>
              <FormattedMessage {...messages.customersLink} />
            </FooterNavLink>
            <FooterNavLink onClick={() => ReactScroll.scroller.scrollTo(CONTACT_SECTION_NAME, SCROLL_PROPS)}>
              <FormattedMessage {...headerMessages.contactLink} />
            </FooterNavLink>
          </Column>

          <Column>
            <FooterColumnItem>biuro@e-ats.pl</FooterColumnItem>
            <FooterColumnItem>+48 602 119 684</FooterColumnItem>
            <FooterColumnItem>Os. Zacisze 8/1</FooterColumnItem>
            <FooterColumnItem>
              64-700 Czarnków,{' '}
              <span>
                <FormattedMessage {...contactMessages.country} />
              </span>
            </FooterColumnItem>
          </Column>

          <Column>
            <FooterColumnItem>NIP: 7632143022</FooterColumnItem>
            <FooterColumnItem>REGON: 385180400</FooterColumnItem>
          </Column>
        </ColumnContainer>

        <GoTop title={intl.formatMessage(messages.goTopButton)} onClick={goToTop}>
          <ArrowUpwardIcon fontSize="small" />
        </GoTop>
      </Content>
    </Container>
  );
};
