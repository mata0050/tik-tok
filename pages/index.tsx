import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  // const hello = trpc.useQuery(['user.getAll']);
  // if (!hello.data) {
  //   return <div>Loading...</div>;

  // }

  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/protected');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>sigin in</button>
      )}

      <h1>hello</h1>

      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? '\u00a0'}</strong>
      </p>
    </div>
  );
}
