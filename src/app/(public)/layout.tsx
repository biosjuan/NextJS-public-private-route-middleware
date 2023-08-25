import React, { Children } from 'react';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='text-center p-5 bg-gray-800 text-white'>
        Welcome to Ecom
      </h1>
      <div className='p-5'>{children}</div>
    </div>
  );
}

export default PublicLayout;
