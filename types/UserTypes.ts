import { PostType } from './PostTypes';

export type UserType = {
  id: string | null;
  name: string | null;
  email: string | null;
  image: string ;
  posts: PostType[] | [];
};
