import Header from '@/components/Header';
import React, { Children } from 'react';

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className='p-5'>{children}</div>
    </div>
  );
}

export default PrivateLayout;
