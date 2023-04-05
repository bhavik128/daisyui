import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'DaisyUI',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
