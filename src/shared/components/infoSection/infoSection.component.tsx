import React  from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import ImageSrc from '../../../images/automation.jpg';
import { Container, Tile, Title, Content, Description, Image, ImageContainer } from './infoSection.styles';
import messages from './infoSection.messages';

export const InfoSection = () => {
  const intl = useIntl();

  return (
    <Container>
      <Tile>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content>
          <Description>
            <FormattedMessage {...messages.description} />
          </Description>
          <ImageContainer>
            <Image src={ImageSrc} alt={intl.formatMessage(messages.imageAlt)}/>
          </ImageContainer>
        </Content>
      </Tile>
    </Container>
  );
};
