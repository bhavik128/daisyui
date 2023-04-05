'use client';

import type { FC } from 'react';
import Button from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import Icons from '@/components/Icons';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={toggleTheme} variant={'theme'}>
      {theme === 'dark' ? <Icons.dark /> : <Icons.light />}
    </Button>
  );
};

export default ThemeToggle;
