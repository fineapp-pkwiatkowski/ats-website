import React, { ReactNode } from 'react';
import { generatePath } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { localesSelectors } from '../../../modules/locales';
import { Container } from './link.styles';

export const Link = ({ to, children }: { to: string; children: ReactNode }) => {
  const lang = useSelector(localesSelectors.selectLocalesLanguage);
  const history = useHistory();

  const handleClick = () => {
    if (lang) {
      history.push({
        pathname: generatePath(`/:lang${to}`, { lang }),
      });
    }
  };

  return <Container onClick={handleClick}>{children}</Container>;
};
