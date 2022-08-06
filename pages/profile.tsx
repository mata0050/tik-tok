import Image from 'next/image';
import React, { useContext } from 'react';
import Button from '../components/Button';
import { MainLayout } from '../components/MainLayout';
import { UserContext } from '../context/UserContext';
import { FaRegEdit } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function ProfileView({ onShowEdit }: { onShowEdit: () => void }) {
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
        <Button onClick={onShowEdit}>
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
      {posts !== undefined &&
        posts.map((post) => (
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

function EditProfile({ onShowEdit }: { onShowEdit: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const queryClient = useQueryClient()
  const { mutate: updateUser, isLoading } = useMutation(
    async (updatedUser) => {
      return axios.put('/api/user', updatedUser);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['user']);
      },
    }
  );
  const { name, id } = useContext(UserContext);

  const onSubmit = async (data: any) => {
    updateUser({ ...data, id: id });
    reset();
    onShowEdit();
    toast.success('Post created successfully');
    
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' bg-gray-100 border-2 shadow-2xl p-6 fixed top-60 w-2/3 rounded-md '
    >
      <div className='flex justify-between border-b-2 border-white pb-2 mb-8'>
        <h3 className='text-xl'>Edit profile</h3>
        <MdClose
          className='text-2xl mr-6 cursor-pointer hover:opacity-60'
          onClick={onShowEdit}
        />
      </div>

      <Input
        label='Name'
        register={register('name', { required: true, value: name })}
      />

      {/* <TextArea label='Bio' register={register('bio')} /> */}

      <div className='border-[1px] border-white  block w-full mt-10 mb-10' />
      <button
        // disabled={isLoading}
        type='submit'
        className='my-4 border capitalize bg-white font-medium py-2 px-10 rounded-md hover:opacity-70'
      >
        <span>Save</span>
      </button>
    </form>
  );
}

export default function Profile() {
  const [showEdit, setShowEdit] = React.useState(false);
  const onShowEdit = () => setShowEdit((prevState) => !prevState);

  return (
    <MainLayout>
      <div className='relative'>
        <ProfileView onShowEdit={onShowEdit} />
        <Videos />
        {showEdit && <EditProfile onShowEdit={onShowEdit} />}
      </div>
    </MainLayout>
  );
}
