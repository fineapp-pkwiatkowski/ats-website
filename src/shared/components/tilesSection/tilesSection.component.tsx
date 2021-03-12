import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './tilesSection.messages';
import { Container, Title, Content } from './tilesSection.styles';

export const TilesSection = () => {
  return (
    <Container>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <Content>
      </Content>
    </Container>
  );
};
