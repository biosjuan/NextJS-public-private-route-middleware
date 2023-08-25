import Link from 'next/link';

function Header() {
  return (
    <div className='flex p-5 bg-gray-800 text-white items-center justify-between'>
      <h1 className='text-2xl font-semibold'>
        <Link href='/'>Header</Link>
      </h1>
      <div className='flex gap-10'>
        <Link href='/orders'>Orders</Link>
        <Link href='/profile'>profile</Link>
        <Link href='/profile'>profile</Link>
      </div>
    </div>
  );
}

export default Header;
