import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../types/UserTypes';
import { MdVerified } from 'react-icons/md';

export default function SideBar() {
  const { data, isLoading } = useQuery(['user'], () => axios.get('api/users'));

  const users: UserType[] | undefined = data?.data;

  return (
    <div className='w-1/3 p-4 pt-[100px] fixed h-screen'>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3'>
          <AiFillHome className='text-2xl' />
          <span className='font-bold'>For You</span>
        </a>
      </Link>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3'>
          <BsPeople className='text-2xl' />
          <span className='font-bold'>Following</span>
        </a>
      </Link>
      <Link href={'#'}>
        <a className='flex items-center gap-3 text-lg hover:text-pink mb-3 pb-8 border-b-[1px] border-gray-200 mr-8'>
          <AiOutlineVideoCamera className='text-2xl' />
          <span className='font-bold'>LIVE</span>
        </a>
      </Link>

      <span className='text-sm text-gray-600 font-semibold'>
        Suggested accounts
      </span>

      {users !== undefined &&
        users.slice(0, 5).map((user) => (
          <div key={user.id} className='flex items-center gap-3 my-3'>
            <Image
              src={user.image}
              alt={`${user.name} profile picture`}
              width={30}
              height={30}
              className='rounded-full'
            />

            <span className='text-sm font-bold'>{user.name}</span>

            <MdVerified className='text-lg text-blue ' />
          </div>
        ))}
    </div>
  );
}
