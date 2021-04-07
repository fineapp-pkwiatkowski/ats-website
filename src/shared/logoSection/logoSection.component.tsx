import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';

import SamsungLogo from '../../images/logos/samsung.png';
import VWLogo from '../../images/logos/vw.png';
import TaskoprojektLogo from '../../images/logos/taskoprojekt.png';
import MarmiteLogo from '../../images/logos/marmite.png';
import QTLogo from '../../images/logos/qt.png';
import AmazonLogo from '../../images/logos/amazon.png';
import { Container, Title, Content, Logo } from './logoSection.styles';
import messages from './logoSection.messages';

export const PARTNERSHIP_SECTION_NAME = 'partnership';

export const LogoSection = () => {
  return (
    <Element name={PARTNERSHIP_SECTION_NAME}>
      <Container>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content>
          <Logo src={SamsungLogo} alt="Samsung logo" title="Samsung" />
          <Logo src={VWLogo} alt="Volkswagen logo" title="Volkswagen" />
          <Logo src={TaskoprojektLogo} alt="Taskoprojekt logo" title="Taskoprojekt" />
          <Logo src={MarmiteLogo} alt="Marmite logo" title="Marmite" />
          <Logo src={QTLogo} alt="QT Swiss logo" title="QT Swiss" />
          <Logo src={AmazonLogo} alt="Amazon logo" title="Amazon" />
        </Content>
      </Container>
    </Element>
  );
};
