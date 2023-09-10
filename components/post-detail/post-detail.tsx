'use client';

import React, { FC } from 'react';
import { PostAuthor } from './post-author';
import { CommentList } from './comment-list';
import { usePostById } from '@/hooks/post-api';

export type PostDetailProps = {
  postId: string;
};

export const PostDetail: FC<PostDetailProps> = ({ postId }) => {
  const { data: post } = usePostById(postId);

  return (
    <article>
      <h1 className="font-bold text-4xl mb-6 text-center">{post?.title}</h1>

      <div className="mt-20">{post && <PostAuthor userId={post.userId} />}</div>

      <section className="mt-8">
        <p className="text-lg">{post?.body}</p>
      </section>

      <section className="mt-12 flex flex-col gap-4">
        <h2 className="font-semibold text-2xl">Comentarios</h2>
        <CommentList postId={postId} />
      </section>
    </article>
  );
};
