import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import { Post } from '@/types/post';
import Link from 'next/link';
import { useUserAvatar } from '@/hooks/use-user-avatar';
import { useUserById } from '@/hooks/user-api';

export type PostListItemProps = {
  post: Post;
};

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const { data: user } = useUserById(post.userId);
  const avatar = useUserAvatar(user);

  const postSlug = useMemo(
    () => `${post.title.replaceAll(' ', '-')}--${post.id}`,
    [post]
  );

  return (
    <article className="p-8 bg-zinc-100 dark:bg-slate-900 rounded-2xl flex flex-col gap-4 w-full h-[200px] relative outline-indigo-400 hover:outline">
      {/* Action */}
      <Link
        href={`/post/${postSlug}`}
        className="absolute top-0 left-0 w-full h-full"
        aria-label={post.title}
      />

      {/* Title section */}
      <div className="flex items-center gap-3">
        <figure className="w-[48px] h-[48px]">
          <Image
            src={avatar}
            width={48}
            height={48}
            className="w-[48px] h-[48px]"
            alt={`Foto de perfil de ${user?.name}`}
          />
        </figure>

        <div
          className="flex flex-col grow justify-center"
          /* Image width (48px) + flex gap (12px) = 60px */
          style={{ width: 'calc(100% - 60px)' }}
        >
          <h2 className="font-semibold capitalize truncate">{post.title}</h2>
          <p className="text-sm text-neutral-800 dark:text-neutral-400 truncate">
            {user?.name}
          </p>
        </div>
      </div>

      {/* Body section */}
      <p className="line-clamp-3 text-ellipsis">{post.body}</p>
    </article>
  );
};
