import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  // const hello = trpc.useQuery(['user.getAll']);
  // if (!hello.data) {
  //   return <div>Loading...</div>;

  // }

  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button onClick={() => signOut}>Sign out</button>
      ) : (
        <button onClick={() => signIn}>sigin in</button>
      )}

      <h1>hello</h1>
    </div>
  );
}
