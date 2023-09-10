import React, { FC, HTMLAttributes } from 'react';
import { Navbar } from '../ui/navbar';

export const BaseLayout: FC<HTMLAttributes<{}>> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex w-full justify-center py-12">
        <div className="flex flex-col w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
};
