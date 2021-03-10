import styled, { css } from 'styled-components';
import { ReactComponent as LogoSVG } from '../../images/ats-logo.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled(LogoSVG)`
  width: 80vw;
  height: auto;
  max-width: 300px;
  margin-bottom: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 200px;
  background-color: lightgrey;
  margin: 20px 0;
`;

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
`;

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const infoText = css`
  color: #464646;
  text-decoration: none;
  font-style: normal;
  flex: 1;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  font-size: 0.9em;
`;

export const Info = styled.p`
  ${infoText};
  margin: 0;
  flex: 0;
`;

export const UnderConstructionInfo = styled.p`
  ${infoText};
  margin: 0;
  flex: 0;
  font-weight: bold;
`;

export const Email = styled.a`
  ${infoText};
`;

export const Phone = styled.a`
  ${infoText};
`;

export const Address = styled.address`
  ${infoText};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  svg {
   fill: lightgrey;
  }
`;
