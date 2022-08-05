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
import { FooterData } from './Footer';

function TopSideBarLinks() {
  return (
    <>
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
    </>
  );
}

function SuggestedAccounts() {
  const { data, isLoading } = useQuery(['users'], () => axios.get('api/users'));

  const users: UserType[] | undefined = data?.data;

  return (
    <>
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
    </>
  );
}

function FollowingAccounts() {
  return (
    <div className='border-t-[1px] border-b-[1px] border-gray-300 my-8 py-4 mr-8'>
      <span className='font-medium text-gray-500 text-sm pb-3 block'>
        Following accounts
      </span>
      <p className='text-sm text-gray-500'>
        Accounts you follow will appear here
      </p>
    </div>
  );
}

function Discover() {
  const { data } = useQuery(['discover'], () => axios.get('api/discover'));

  const discover: string[] | undefined = data?.data;
  return (
    <div className='border-b-[1px] -mt-4 pb-8 mr-8'>
      <span className='font-medium text-gray-500 text-sm pb-3 block'>
        Discover
      </span>

      <div className='flex gap-4 flex-wrap'>
        {discover !== undefined &&
          discover.map((discover) => (
            <span
              key={discover}
              className='text-sm border-[1px] py-1 px-2 rounded-full'
            >
              {discover}
            </span>
          ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className='mt-8 absolute bottom-10 mr-6'>
      {FooterData.map((footer) => (
        <div key={footer.sectionTitle} className='flex gap-4 flex-wrap'>
          {footer.section.map((section) => (
            <span key={section.title} className='block text-[11px] opacity-60 font-medium'>{section.title}</span>
          ))}
        </div>
      ))}

      <span className='block text-[11px] opacity-60 font-medium mt-10'>© 2022 TikTok</span>
    </div>
  );
}

export default function SideBar() {
  return (
    <div className='w-1/3 p-4 pt-[100px] fixed h-screen'>
      <TopSideBarLinks />
      <SuggestedAccounts />
      <FollowingAccounts />
      <Discover />
      <Footer/>
    </div>
  );
}
