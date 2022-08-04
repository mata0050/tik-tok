import { createContext } from 'react';
import { UserType } from '../types/UserTypes';

type UserContextTypes = UserType;

export const UserContext = createContext<UserContextTypes>({
  id: null,
  name: null,
  email: null,
  image: '',
  posts: [],
});
