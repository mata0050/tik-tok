import Image from 'next/image';
import React, { useContext } from 'react';
import Button from '../components/Button';
import { MainLayout } from '../components/MainLayout';
import { UserContext } from '../context/UserContext';
import { FaRegEdit } from 'react-icons/fa';

function ProfileView() {
  const { email, name, image } = useContext(UserContext);
  return (
    <>
      <div className='flex gap-4'>
        <Image
          src={image}
          alt={`${name} profile picture`}
          width={100}
          height={100}
          className='rounded-full'
        />
        <div>
          <h1 className='text-3xl font-semibold'>{name}</h1>
          <p className='mt-2 mb-6'>{email}</p>
        </div>
      </div>
      <div className='ml-28 -mt-4'>
        <Button onClick={() => {}}>
          <FaRegEdit className='inline pb-1 mr-2' />
          <span>Edit profile</span>
        </Button>
      </div>

      <h2 className='text-xl font-medium border-b-2 text-center mt-6 pb-[2px] mx-8'>
        Video
      </h2>
    </>
  );
}

function Videos() {
  const { posts } = useContext(UserContext);
  return (
    <div className='flex flex-wrap'>
      {posts.map((post) => (
        <div key={post.id}>
          <iframe
            width='221'
            height='327'
            src={post.videoUrl}
            title='Do you copy paste your code?'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-xl ml-16 mt-8'
          />
        </div>
      ))}
    </div>
  );
}

export default function Profile() {
  return (
    <MainLayout>
      <div>
        <ProfileView />
        <Videos />
      </div>
    </MainLayout>
  );
}
