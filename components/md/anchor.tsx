import React, { FC, HTMLAttributes } from 'react';

export const Anchor: FC<HTMLAttributes<{}>> = (props) => {
  return (
    <a
      className="text-indigo-500 dark:text-indigo-400 hover:underline"
      {...props}
    />
  );
};
