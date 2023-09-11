import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-center bg-zinc-100 dark:bg-slate-900/80">
      <div className="grid grid-cols-3 grid-rows-1 w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="flex w-full col-start-2 justify-center">
          <div className="px-8 py-8 hover:bg-white dark:hover:bg-black relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              href={'/'}
              className="absolute top-0 left-0 w-full h-full"
              aria-label="Pagina de inicio"
            ></Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full col-start-3">
          <div className="px-8 pt-8 pb-4 hover:bg-white dark:hover:bg-black relative">
            <div className="flex justify-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>

            <span className="text-xs">Presentación</span>
            <Link
              href={'/about'}
              className="absolute top-0 left-0 w-full h-full"
              aria-label="Pagina de presentación"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
