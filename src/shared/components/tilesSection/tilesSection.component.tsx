import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';
import { useSpring } from 'react-spring';

import { animationProps } from '../infoSection/infoSection.component';
import messages from './tilesSection.messages';
import {
  Container,
  Title,
  Content,
  TilesList,
  Tile,
  ElectricsIcon,
  MechanicsIcon,
  DesignIcon,
  RoboticsIcon,
  PLCProgrammingIcon,
  TileTitle,
  ServiceList,
  ServiceItem,
} from './tilesSection.styles';

export const ACTIVITY_SECTION_NAME = 'activity';

export const TilesSection = () => {
  const animProps = useSpring({ ...animationProps, delay: 400 });
  return (
    <Element name={ACTIVITY_SECTION_NAME}>
      <Container style={animProps}>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content>
          <TilesList>
            <Tile>
              <ElectricsIcon />
              <TileTitle>
                <FormattedMessage {...messages.electricsServiceTitle} />
              </TileTitle>
              <ServiceList>
                <FormattedMessage
                  {...messages.electricsServices}
                  values={{
                    li: (chunks: string) => <ServiceItem>{chunks}</ServiceItem>,
                  }}
                />
              </ServiceList>
            </Tile>
            <Tile>
              <MechanicsIcon />
              <TileTitle>
                <FormattedMessage {...messages.mechanicsServiceTitle} />
              </TileTitle>
              <ServiceList>
                <FormattedMessage
                  {...messages.mechanicsServices}
                  values={{
                    li: (chunks: string) => <ServiceItem>{chunks}</ServiceItem>,
                  }}
                />
              </ServiceList>
            </Tile>
            <Tile>
              <DesignIcon />
              <TileTitle>
                <FormattedMessage {...messages.designServiceTitle} />
              </TileTitle>
              <ServiceList>
                <FormattedMessage
                  {...messages.designServices}
                  values={{
                    li: (chunks: string) => <ServiceItem>{chunks}</ServiceItem>,
                  }}
                />
              </ServiceList>
            </Tile>
            <Tile>
              <RoboticsIcon />
              <TileTitle>
                <FormattedMessage {...messages.roboticsServiceTitle} />
              </TileTitle>
              <ServiceList>
                <FormattedMessage
                  {...messages.roboticsServices}
                  values={{
                    li: (chunks: string) => <ServiceItem>{chunks}</ServiceItem>,
                  }}
                />
              </ServiceList>
            </Tile>
            <Tile>
              <PLCProgrammingIcon />
              <TileTitle>
                <FormattedMessage {...messages.plcProgrammingServiceTitle} />
              </TileTitle>
              <ServiceList>
                <FormattedMessage
                  {...messages.plcProgrammingServices}
                  values={{
                    li: (chunks: string) => <ServiceItem>{chunks}</ServiceItem>,
                  }}
                />
              </ServiceList>
            </Tile>
          </TilesList>
        </Content>
      </Container>
    </Element>
  );
};
