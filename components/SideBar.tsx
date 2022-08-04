import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className='w-1/3 p-4 pt-[100px] fixed h-screen'>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3'>
          <AiFillHome className='text-2xl'/>
          <span className='font-bold'>For You</span>
        </a>
      </Link>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3'>
          <BsPeople className='text-2xl'/>
          <span className='font-bold'>Following</span>
        </a>
      </Link>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3 pb-8 border-b-[1px] border-gray-200 mr-8'>
          <AiOutlineVideoCamera className='text-2xl'/>
          <span className='font-bold'>LIVE</span>
        </a>
      </Link>
    </div>
  );
}
