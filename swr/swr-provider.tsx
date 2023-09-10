'use client';

import { FC, HTMLAttributes } from 'react';
import { SWRConfig } from 'swr';
import { api } from './fetcher';

export type SWRProps = {
  fallback?: Record<string, any>;
};

export const SWRProvider: FC<HTMLAttributes<{}> & SWRProps> = ({
  children,
  fallback,
}) => {
  return (
    <SWRConfig
      value={{
        fetcher: api,
        fallback,
      }}
    >
      {children}
    </SWRConfig>
  );
};
