import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import SideBar from '../components/SideBar';
import { PostType } from '../types/PostTypes';
import { UserType } from '../types/UserTypes';

type AllPostsProps = PostType & { User: UserType };

function PostCard(props: PostType & { User: UserType }) {
  return (
    <div className='flex flex-col pr-16 pb-10 border-b  border-gray-200  mb-10'>
      <div className='flex items-center justify-between '>
        <div className='flex flex-row gap-4 items-center'>
          <Image
            src={props.User.image}
            alt=''
            width={60}
            height={60}
            className='rounded-full'
          />

          <div className='flex flex-col'>
            <span className='font-bold'>{props.User.name?.split(' ')}</span>
            <span className='text-sm font-thin'>{props.User.name}</span>
            <p>{props.caption}</p>
          </div>
        </div>

        <button className='border-pink border-[1px] px-4 text-pink font-bold rounded-md'>
          Follow
        </button>
      </div>

      <iframe
        width='321'
        height='527'
        src={props.videoUrl}
        title='Do you copy paste your code?'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='rounded-xl ml-16 mt-8'
      />
    </div>
  );
}



export default function Home() {
  const { isLoading, isError, data, error } = useQuery(['posts'], () =>
    axios.get('/api/post')
  );
  const posts = data?.data as AllPostsProps[];

  return (
    <div className='relative '>
      <SideBar />
      <div className='ml-60 p-[100px]'>
        {!isLoading &&
          !isError &&
          posts.map((post) => <PostCard key={post.id} {...post} />)}
      </div>
    </div>
  );
}
