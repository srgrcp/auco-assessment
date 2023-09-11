import React, { FC, HTMLAttributes } from 'react';

export const H1: FC<HTMLAttributes<{}>> = (props) => {
  return <h1 className="font-bold text-4xl mb-6" {...props} />;
};

export const H2: FC<HTMLAttributes<{}>> = (props) => {
  return <h2 className="font-semibold text-3xl my-6" {...props} />;
};
