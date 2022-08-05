import { createContext } from 'react';
import { UserType } from '../types/UserTypes';

type SideBarContextTypes = {
  discover: string[] | undefined;
  users: UserType[] | undefined;
};

export const SideBarContext = createContext<SideBarContextTypes>({
  discover: [],
  users: [],
});
