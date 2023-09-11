import { BaseLayout } from '@/components/layouts/base-layout';
import React from 'react';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default AboutLayout;
