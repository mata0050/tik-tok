import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostType } from "../types/PostTypes";

export default function Home() {
  const { isLoading, isError, data, error } = useQuery(['posts'], () =>
    axios.get('/api/post')
  );
  const posts = data?.data as PostType[];

  console.log(posts)
  

  return (
    <div>
  
    </div>
  );
}
