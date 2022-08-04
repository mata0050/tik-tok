import React from 'react';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { BsCloudUploadFill } from 'react-icons/bs';
import Input from '../components/Input';

function VideoUpload() {
  return (
    <div className='border-gray-500 border-2 border-dashed	w-1/3 p-8 flex flex-col items-center rounded'>
      <BsCloudUploadFill className='text-3xl  text-gray-400 my-4' />

      <h3 className='text-xl font-semibold mb-1'>Select video to upload</h3>
      <p className='text-sm mb-2'>Or drag and drop a file</p>

      <span className='text-sm block w-40 text-center'>
        For Demo purposes you can only add URL{' '}
      </span>
    </div>
  );
}

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    //     try {
    //       await addUser.mutateAsync(data);
    //     } catch (error) {
    //       console.error(error);
    //       toast.error('Please Register again');
    //     }
  };

  return (
    <div className='pt-[70px] bg-gray-100'>
      <div className='bg-white w-full p-3' />
      <div className='p-10'>
        <h2 className='text-2xl font-semibold mb-2'>Upload video</h2>
        <p className='text-gray-600'>Post a video to your account</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex mt-6 gap-6'>
          <VideoUpload />
          <div className='w-2/3'>
            <Input
              label='Caption'
              register={register('caption', { required: true })}
            />
            <Input
              label='Video Url'
              register={register('videoUrl', { required: true })}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
