import React from 'react';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { BsCloudUploadFill } from 'react-icons/bs';
import Input from '../components/Input';

function VideoUpload() {
  return (
    <div className='border-gray-500 border-2 border-dashed	w-1/3 p-8 flex flex-col items-center rounded w-1/3'>
      <BsCloudUploadFill className='text-3xl  text-gray-400 my-4' />

      <h3 className='text-xl font-semibold mb-1'>Select video to upload</h3>
      <p className='text-sm mb-2'>Or drag and drop a file</p>

      <span className='text-sm block w-40 text-center'>
        For Demo purposes you can only add URL
      </span>
    </div>
  );
}

function Form() {
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
    <form onSubmit={handleSubmit(onSubmit)} className='w-2/3'>
      <Input
        label='Caption'
        register={register('caption', { required: true })}
      />
      <Input
        label='Video Url'
        register={register('videoUrl', { required: true })}
      />

      <label className='block'>
        <span className='text-gray-700'>Who can view this video</span>
        <select
          {...register('videoUrl', { required: true })}
          className='mt-1 block w-1/2 rounded-md border-grey-500 h-[45px] border-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 px-3'
        >
          <option value='public'>Public</option>
          <option value='private'>Private</option>
        </select>
      </label>

      <span className='text-sm font-thin'>
        We&apos;ll check your video for potential copyright infringements on
        used sounds. If infringements are found, you can edit the video before
        posting. <b>Learn more</b>
      </span>

      <div className='flex gap-6 mt-10'>
        <button
          // disabled={isLoading}
          type='submit'
          className='my-4 capitalize border-2  font-medium py-2 px-8 rounded-md hover:opacity-70'
        >
          <span>Discard</span>
        </button>

        <button
          // disabled={isLoading}
          type='submit'
          className='my-4 capitalize bg-white font-medium py-2 px-10 rounded-md hover:opacity-70'
        >
          <span>Post</span>
        </button>
      </div>
    </form>
  );
}

export default function Upload() {
  return (
    <div className='pt-[70px] bg-gray-100 '>
      <div className='bg-white w-full p-3' />
      <div className='p-10 pb-36'>
        <h2 className='text-2xl font-semibold mb-2'>Upload video</h2>
        <p className='text-gray-600'>Post a video to your account</p>
        <div className='flex mt-6 gap-6'>
          <VideoUpload />
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
