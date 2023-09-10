import { User } from '@/types/user';
import useSWR from 'swr';

export const useUserById = (userId: string | number) =>
  useSWR<User>(`users/${userId}`);
