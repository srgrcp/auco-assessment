import { Comment } from '@/types/comment';
import React, { FC } from 'react';
import Image from 'next/image';
import { useUserAvatar } from '@/hooks/use-user-avatar';

export type CommentListItemProps = {
  comment: Comment;
};

export const CommentListItem: FC<CommentListItemProps> = ({ comment }) => {
  const avatar = useUserAvatar(comment);

  return (
    <div className="p-8 bg-zinc-100 dark:bg-slate-900 rounded-2xl flex flex-col gap-4 w-full">
      {/* Title section */}
      <div className="flex items-center gap-3">
        <figure className="w-[48px] h-[48px]">
          <Image
            src={avatar}
            width={48}
            height={48}
            className="w-[48px] h-[48px]"
            alt={`Foto de perfil de ${comment?.name}`}
          />
        </figure>

        <div
          className="flex flex-col grow justify-center"
          /* Image width (48px) + flex gap (12px) = 60px */
          style={{ width: 'calc(100% - 60px)' }}
        >
          <h2 className="font-semibold capitalize truncate">{comment?.name}</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
            {comment?.email}
          </p>
        </div>
      </div>

      {/* Body section */}
      <p className="">{comment.body}</p>
    </div>
  );
};
