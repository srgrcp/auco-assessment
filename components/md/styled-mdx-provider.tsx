'use client';

import { MDXProvider } from '@mdx-js/react';
import React, { FC, HTMLAttributes } from 'react';
import { H1, H2 } from './heading';
import { Anchor } from './anchor';
import { P } from './paragraph';

const components = {
  h1: H1,
  h2: H2,
  a: Anchor,
  p: P,
};

export const StyledMDXProvider: FC<HTMLAttributes<{}>> = (props) => {
  return <MDXProvider components={components} {...props} />;
};
