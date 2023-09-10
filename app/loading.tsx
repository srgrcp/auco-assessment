import { BaseLayout } from '@/components/layouts/base-layout';
import { PostListItemSkeleton } from '@/components/post-list/post-list-item-skeleton';
import React from 'react';

export default function Loading() {
  return (
    <BaseLayout>
      <div>
        <h1 className="font-bold text-4xl mb-6 text-center">Artículos</h1>
        <section className="flex flex-col gap-4">
          <PostListItemSkeleton />
          <PostListItemSkeleton />
          <PostListItemSkeleton />
        </section>
      </div>
    </BaseLayout>
  );
}
