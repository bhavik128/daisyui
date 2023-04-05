import { FC } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar: FC = () => {
  return (
    <nav className='flex h-20 items-center justify-between border-b border-b-base-300 shadow-base-300 transition-colors ease-in-out'>
      <div className='container mx-auto flex w-full max-w-7xl items-center justify-between'>
        <h1 className='text-2xl'>LOGO</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
