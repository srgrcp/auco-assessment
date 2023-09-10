import React, { FC } from 'react';
import { CommentListItem } from './comment-list-item';
import { useCommentsByPostId } from '@/hooks/comment-api';

export type CommentListProps = {
  postId: string;
};

export const CommentList: FC<CommentListProps> = ({ postId }) => {
  const { data: comments } = useCommentsByPostId(postId);

  return (
    <div className="flex flex-col gap-4">
      {comments?.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
