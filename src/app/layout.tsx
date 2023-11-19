import React from 'react';

import StyledComponentsRegistry from '../lib/AntdRegistry';

import '../app/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Centro CUMI',
  description: 'Página oficial de centro CUMI',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <Navbar/>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;