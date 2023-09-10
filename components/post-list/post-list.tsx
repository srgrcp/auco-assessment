'use client';

import React from 'react';
import { PostListItem } from './post-list-item';
import { usePosts } from '@/hooks/post-api';

export const PostList = () => {
  const { data: posts } = usePosts();

  return (
    <div>
      <h1 className="font-bold text-4xl mb-6 text-center">Artículos</h1>
      <section className="flex flex-col gap-4">
        {posts?.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};
