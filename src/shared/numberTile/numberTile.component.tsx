import React, { useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import { useOnScreen } from '../hooks/useOnScreen/useOnScreen.hook';
import { Container, Number, Divider, Description } from './numberTile.styles';

export interface NumberTileProps {
  number: number;
  text: string;
}

export const NumberTile = ({ number, text }: NumberTileProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const { countUp, start, pauseResume } = useCountUp({
    end: number,
    delay: 0,
    duration: 3,
  });

  useEffect(() => {
    if (!visible) {
      pauseResume();
    } else {
      start();
    }
  }, [visible]);

  useEffect(() => {
    if (isOnScreen && !visible) {
      setVisible(true);
    }
  }, [isOnScreen]);

  return (
    <Container ref={ref}>
      <Number>{countUp}</Number>
      <Divider />
      <Description>{text}</Description>
    </Container>
  );
};
