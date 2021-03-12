import styled from 'styled-components';

import { sectionStyles, sectionTitleBlue } from '../../../theme/general';

export const Container = styled.section`
  ${sectionStyles};
`;

export const Title = styled.h2`
  ${sectionTitleBlue};
`;

export const Content = styled.div`
  width: 100%;
  height: 500px;
  outline: 1px solid grey;
`;
