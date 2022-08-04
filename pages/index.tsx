import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { PostType } from '../types/PostTypes';
import { UserType } from '../types/UserTypes';

type AllPostsProps = PostType & { User: UserType };

function PostCard(props: PostType & { User: UserType }) {
  return (
    <>
      <div className='flex items-center justify-between w-2/3'>
        <div className='flex gap-4'>
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
    </>
  );
}

export default function Home() {
  const { isLoading, isError, data, error } = useQuery(['posts'], () =>
    axios.get('/api/post')
  );
  const posts = data?.data as AllPostsProps[];

  return (
    <div className='pt-[100px]'>
      {!isLoading &&
        !isError &&
        posts.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  );
}
