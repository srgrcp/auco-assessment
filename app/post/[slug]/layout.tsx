import type { Metadata } from 'next';
import { PostDetailPageProps } from './page';
import { api } from '@/swr/fetcher';
import { Post } from '@/types/post';
import { User } from '@/types/user';

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const postId = params.slug.split('--').pop();

  const postRequest = api<Post>(`posts/${postId}`);

  const [post] = await Promise.all([postRequest]);
  const user = await api<User>(`users/${post.userId}`);

  return {
    title: `${post.title} | Auco Assessment By Sergio Carrillo`,
    description: post.body,
    authors: {
      name: user.name,
      url: user.website,
    },
    alternates: {
      canonical: `https://auco-assessment.pages.dev/post/${params.slug}`,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
