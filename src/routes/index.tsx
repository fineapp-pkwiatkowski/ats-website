import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, appLocales, translationMessages } from '../i18n';
import { asyncComponent } from '../shared/utils/asyncComponent';
import { Cookies } from '../shared/components/cookies';
import { AppComponent as App } from './app.component';

import { ROUTES } from './app.constants';
//<-- IMPORT ROUTE -->

const Home = asyncComponent(() => import('./home'), 'Home');
const Report = asyncComponent(() => import('./report'), 'Report');

const MatchedLanguageComponent = () => {
  const match = useRouteMatch();
  return (
    <App>
      <Switch>
        <Route exact path={`${match.path}${ROUTES.home}`}>
          <Home />
          <Cookies />
        </Route>

        <Route path={`${match.path}${ROUTES.report}`}>
          <Report />
          <Cookies />
        </Route>

        {/* <-- INJECT ROUTE --> */}

        <Route>
          <Redirect to={ROUTES.home} />
        </Route>
      </Switch>
    </App>
  );
};

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={DEFAULT_LOCALE} />
      </Route>

      <Route path={`/:lang(${appLocales.join('|')})`}>
        <MatchedLanguageComponent />
      </Route>

      <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <Route>
          <Redirect to={ROUTES.home} />
        </Route>
      </IntlProvider>
    </Switch>
  );
};
