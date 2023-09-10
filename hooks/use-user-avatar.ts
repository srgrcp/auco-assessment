import { Named } from '@/types/named';
import { useMemo } from 'react';

export const useUserAvatar = (user: Named | undefined) =>
  useMemo(
    () =>
      user
        ? `https://ui-avatars.com/api/?format=svg&background=random&rounded=true&bold=true&name=${user.name}`
        : 'https://ui-avatars.com/api/?format=svg&rounded=true&bold=true&name=..',
    [user]
  );
