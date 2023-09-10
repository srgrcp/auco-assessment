import React from 'react';

export const PostListItemSkeleton = () => {
  return (
    <div className="p-8 bg-zinc-200 dark:bg-slate-800 rounded-2xl flex flex-col gap-4 w-full h-[200px]">
      {/* Title section */}
      <div className="flex items-center gap-3 animate-pulse">
        <div className="w-[48px] h-[48px] rounded-full bg-zinc-300 dark:bg-slate-600"></div>

        <div
          className="flex flex-col grow justify-center"
          /* Image width (48px) + flex gap (12px) = 60px */
          style={{ width: 'calc(100% - 60px)' }}
        >
          <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-gray-700 w-7/12 mb-4"></div>
          <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-gray-700 w-4/12 mb-4"></div>
        </div>
      </div>

      {/* Body section */}
      <div className="flex flex-col animate-pulse">
        <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-gray-700 w-10/12 mb-4"></div>
        <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-gray-700 w-8/12 mb-4"></div>
        <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-gray-700 w-9/12 mb-4"></div>
      </div>
    </div>
  );
};
