import React, { ReactNode } from 'react';
import { generatePath } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { localesSelectors } from '../../../modules/locales';
import { Container } from './link.styles';

export interface Props {
  to: string;
  children: ReactNode;
  scrollTo?: string;
}

export const Link = ({ to, children, scrollTo }: Props) => {
  const lang = useSelector(localesSelectors.selectLocalesLanguage);
  const history = useHistory();

  const handleClick = () => {
    if (lang) {
      history.push({
        pathname: generatePath(`/:lang${to}`, { lang }),
        state: scrollTo ? scrollTo : '',
      });
    }
  };

  return <Container onClick={handleClick}>{children}</Container>;
};
