import { Post } from '@/types/post';
import useSWR from 'swr';

export const usePosts = () => useSWR<Post[]>('posts');

export const usePostById = (postId: string | number) =>
  useSWR<Post>(`posts/${postId}`);
