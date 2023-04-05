import { FC } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar: FC = () => {
  return (
    <nav className='flex items-center justify-between p-2'>
      <h1 className='text-2xl'>LOGO</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
