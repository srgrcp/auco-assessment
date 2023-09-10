import { useUserAvatar } from '@/hooks/use-user-avatar';
import React, { FC } from 'react';
import Image from 'next/image';
import { useUserById } from '@/hooks/user-api';

export type PostAuthorProps = {
  userId: number;
};

export const PostAuthor: FC<PostAuthorProps> = ({ userId }) => {
  const { data: user } = useUserById(userId);
  const avatar = useUserAvatar(user);

  return (
    <div className="flex items-center gap-3">
      <figure>
        <Image
          src={avatar}
          alt={`Foto de perfil de ${user?.name}`}
          className="w-[48px] h-[48px]"
          width={48}
          height={48}
        />
      </figure>

      <div
        className="flex flex-col grow justify-center"
        /* Image width (48px) + flex gap (12px) = 60px */
        style={{ width: 'calc(100% - 60px)' }}
      >
        <p className="font-semibold capitalize truncate">{user?.name}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
          {user?.email}
        </p>
      </div>
    </div>
  );
};
