'use client';

import type { FC } from 'react';
import Button from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import Icons from '@/components/Icons';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  const ThemeToggleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant={'theme'} onClick={ThemeToggleClick}>
      {theme === 'dark' ? <Icons.dark /> : <Icons.light />}
    </Button>
  );
};

export default ThemeToggle;
