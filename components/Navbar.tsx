import Link from 'next/link';
import React, { useContext } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const { data: session } = useSession();
  const user = useContext(UserContext);


  return (
    <nav className='bg-white border-b-2 flex justify-between items-center py-2 px-10 fixed w-full z-10'>
      <Link href='/'>
        <a className='text-darkBlue -my-3 block'>
          <Image src='/logo.png' alt='Tik Tok Logo' width={130} height={40} />
        </a>
      </Link>

      <div className='relative'>
        <input
          type='text'
          className='bg-grey font-extralight  w-[300px] py-[8px] rounded-full px-3 '
          placeholder='Search accounts and videos'
        />

        <div className=' absolute right-5 top-2 z-10 pl-2  border-l-2 border-black '>
          <BsSearch className=' text-xl' />
        </div>
      </div>

      <ul className='flex gap-4 pt-1'>
        <Link href='/upload'>
          <a className='py-[4px] px-5 text-md border-2 font-bold rounded hover:opacity-70 h-[36px]'>
            + Upload
          </a>
        </Link>

        {session ? (
          <>
            <li>
              <button
                onClick={() => signOut()}
                className='py-[4px] px-5 bg-pink text-white text-md border-2 rounded hover:opacity-70 '
              >
                Log out
              </button>
            </li>

            <li className='mr-8'>
              {Object.keys(user).length !== 0 && (
                <Image
                  src={user.image}
                  alt='profile picture'
                  width={40}
                  height={40}
                  className='rounded-full '
                />
              )}
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => signIn()}
              className='py-[4px] px-5 bg-pink text-white text-md border-2 rounded hover:opacity-70 mr-8'
            >
              Log in
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
