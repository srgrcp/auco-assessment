import Loading from '@/app/loading';
import { BaseLayout } from '@/components/layouts/base-layout';
import { PostDetail } from '@/components/post-detail/post-detail';
import { api } from '@/swr/fetcher';
import { SWRProvider } from '@/swr/swr-provider';
import { Comment } from '@/types/comment';
import { Post } from '@/types/post';
import { User } from '@/types/user';
import React, { FC, Suspense } from 'react';

export const runtime = 'edge';

export type PostDetailPageProps = {
  params: {
    slug: string;
  };
};

const Page: FC<PostDetailPageProps> = async ({ params }) => {
  const postId = params.slug.split('--').pop();

  // Prerender posts, comments and user (post author)
  const postRequest = api<Post>(`posts/${postId}`);
  const commentsRequest = api<Comment[]>(`posts/${postId}/comments`);

  const [post, comments] = await Promise.all([postRequest, commentsRequest]);
  const user = await api<User>(`users/${post.userId}`);

  const fallback: Record<string, any> = {
    [`posts/${postId}`]: post,
    [`users/${post.userId}`]: user,
    [`posts/${postId}/comments`]: comments,
  };

  return (
    <SWRProvider fallback={fallback}>
      <BaseLayout>
        <Suspense fallback={<Loading />}>
          {postId ? <PostDetail postId={postId} /> : <>Error</>}
        </Suspense>
      </BaseLayout>
    </SWRProvider>
  );
};

export default Page;
