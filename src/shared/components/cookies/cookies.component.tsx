import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Container, CookieseMessage, AcceptButton } from './cookies.styles';
import messages from './cookies.messages';

const COOKIE_STORAGE = 'ats-cookies-accept';

const setCookiesStorage = () => localStorage.setItem(COOKIE_STORAGE, 'true');
const getCookiesStorage = () => localStorage.getItem(COOKIE_STORAGE) === 'true';

export const Cookies = () => {
  const { isMobile } = useBreakpoint();
  const [display, setDisplay] = useState<boolean>(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(getCookiesStorage());

  useEffect(() => {
    setDisplay(!cookiesAccepted);
  }, [cookiesAccepted, setDisplay]);

  const handleAccept = () => {
    setCookiesStorage();
    setCookiesAccepted(true);
  };

  return (
    <Container visible={display}>
      <CookieseMessage>
        <FormattedMessage {...messages.message} />
      </CookieseMessage>
      <AcceptButton onClick={handleAccept}>
        {isMobile ? (
          <FormattedMessage {...messages.acceptButtonMobile} />
        ) : (
          <FormattedMessage {...messages.acceptButton} />
        )}
      </AcceptButton>
    </Container>
  );
};
