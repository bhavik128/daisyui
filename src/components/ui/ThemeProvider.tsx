'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider as Provider } from 'next-themes';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <Provider defaultTheme='dark'>{children}</Provider>;
};

export default ThemeProvider;
