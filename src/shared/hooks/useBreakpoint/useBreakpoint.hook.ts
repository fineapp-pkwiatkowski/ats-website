import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Breakpoint } from '../../../theme/media';

interface BreakpointInterface {
  activeBreakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useBreakpoint = (): BreakpointInterface => {
  const theme = useContext(ThemeContext);

  return {
    activeBreakpoint: theme.activeBreakpoint ?? Breakpoint.DESKTOP,
    isMobile: theme.activeBreakpoint === Breakpoint.MOBILE,
    isTablet: theme.activeBreakpoint === Breakpoint.TABLET,
    isDesktop:
      [Breakpoint.DESKTOP, Breakpoint.DESKTOP_FULL, Breakpoint.DESKTOP_WIDE].indexOf(
        theme.activeBreakpoint as Breakpoint
      ) >= 0,
  };
};
