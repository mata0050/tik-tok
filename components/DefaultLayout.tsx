import Head from 'next/head';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Navbar from './Navbar';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isLoading, isError, data, error } = useQuery(['user'], () =>
    axios.get('/api/user')
  );
  
  return (
    <>
      <Head>
        <title>Prisma Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <UserContext.Provider value={{...data?.data}}>
        <Navbar />
        {/* SideBar */}
        <main>{children}</main>
      </UserContext.Provider>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};
