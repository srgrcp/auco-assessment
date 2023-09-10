import { BaseLayout } from '@/components/layouts/base-layout';
import { PostListItemSkeleton } from '@/components/post-list/post-list-item-skeleton';
import React from 'react';

const Loading = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col">
        <div className="flex justify-center animate-pulse">
          <div className="h-9 bg-zinc-100 rounded-full dark:bg-gray-700 w-10/12 mb-4"></div>
        </div>

        {/* Author section */}
        <div className="flex items-center gap-3 animate-pulse mt-20">
          <div className="w-[48px] h-[48px] rounded-full bg-zinc-100 dark:bg-slate-600"></div>

          <div
            className="flex flex-col grow justify-center"
            /* Image width (48px) + flex gap (12px) = 60px */
            style={{ width: 'calc(100% - 60px)' }}
          >
            <div className="h-2.5 bg-zinc-100 rounded-full dark:bg-gray-700 w-7/12 mb-4"></div>
            <div className="h-2.5 bg-zinc-100 rounded-full dark:bg-gray-700 w-4/12 mb-4"></div>
          </div>
        </div>

        {/* Body section */}
        <div className="flex flex-col animate-pulse mt-8">
          <div className="h-2.5 bg-zinc-100 rounded-full dark:bg-gray-700 w-10/12 mb-4"></div>
          <div className="h-2.5 bg-zinc-100 rounded-full dark:bg-gray-700 w-8/12 mb-4"></div>
          <div className="h-2.5 bg-zinc-100 rounded-full dark:bg-gray-700 w-9/12 mb-4"></div>
        </div>

        {/* Comments section */}
        <section className="mt-12 flex flex-col gap-4 animate-pulse">
          <div className="h-6 bg-zinc-100 rounded-full dark:bg-gray-700 w-4/12 mb-4"></div>
          <PostListItemSkeleton />
          <PostListItemSkeleton />
          <PostListItemSkeleton />
        </section>
      </div>
    </BaseLayout>
  );
};

export default Loading;
