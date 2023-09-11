import { FC, HTMLAttributes } from 'react';

export const P: FC<HTMLAttributes<{}>> = (props) => {
  return <p className="text-lg mb-3" {...props} />;
};
