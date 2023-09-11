'use client';

import React from 'react';
import Presentation from './presentation.mdx';
import { StyledMDXProvider } from '@/components/md/styled-mdx-provider';

const Page = () => {
  return (
    <StyledMDXProvider>
      <Presentation />
    </StyledMDXProvider>
  );
};

export default Page;
