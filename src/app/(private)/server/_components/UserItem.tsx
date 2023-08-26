'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
function UseItem({ user }: any) {
  const router = useRouter();
  return (
    <li
      className='cursor-pointer'
      onClick={() => {
        router.push(`/server/${user.id}`);
      }}
      key={user.id}
    >
      {user.name}
    </li>
  );
}

export default UseItem;
