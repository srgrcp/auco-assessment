import { BaseLayout } from '@/components/layouts/base-layout';
import { PostList } from '@/components/post-list/post-list';
import { FC, Suspense } from 'react';
import Loading from './loading';
import { SWRProvider } from '@/swr/swr-provider';
import { api } from '@/swr/fetcher';
import { Post } from '@/types/post';
import { User } from '@/types/user';

export const runtime = 'edge';

const Home: FC = async () => {
  // Prerender posts and users
  const posts = await api<Post[]>('posts');
  const userRequests = posts.map((post) => api<User>(`users/${post.userId}`));
  const users = await Promise.all(userRequests);

  const fallback: Record<string, any> = {
    posts: posts,
  };

  for (const user of users) {
    fallback[`users/${user.id}`] = user;
  }

  return (
    <SWRProvider fallback={fallback}>
      <BaseLayout>
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </BaseLayout>
    </SWRProvider>
  );
};

export default Home;
