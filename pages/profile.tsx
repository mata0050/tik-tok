import React, { useContext } from 'react';
import { MainLayout } from '../components/MainLayout';
import SideBar from '../components/SideBar';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  const { email, name, image } = useContext(UserContext);
  return <MainLayout>
    <div></div>
  </MainLayout>;
}
