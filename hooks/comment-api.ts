import { Comment } from '@/types/comment';
import useSWR from 'swr';

export const useCommentsByPostId = (postId: string | number) =>
  useSWR<Comment[]>(`posts/${postId}/comments`);
