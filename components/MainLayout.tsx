import { ReactNode } from 'react';
import { SideBarContext } from '../context/SideBarContext';
import SideBar from './SideBar';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../types/UserTypes';

type DefaultLayoutProps = { children: ReactNode };

export const MainLayout = ({ children }: DefaultLayoutProps) => {
  const { data, isLoading } = useQuery(['users'], () => axios.get('api/users'));

  const users: UserType[] | undefined = data?.data;

  const { data: discoverData } = useQuery(['discover'], () =>
    axios.get('api/discover')
  );

  const discover: string[] | undefined = discoverData?.data;

  return (
    <SideBarContext.Provider value={{ users, discover }}>
      <div className='relative '>
        <SideBar />
        <div className='ml-60 p-[100px]'>{children}</div>
      </div>
    </SideBarContext.Provider>
  );
};
