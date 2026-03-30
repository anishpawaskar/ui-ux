import { cn } from '@/lib/utils';
import React from 'react';

export const BookDemoBtn = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-slate-50'>
      <button
        className={cn(
          'group relative h-10 overflow-hidden rounded-md bg-gray-800 pr-3 pl-14 text-sm font-semibold text-white'
        )}
      >
        <span className='absolute inset-0 left-0 p-0.5'>
          <span className='relative inline-block size-full'>
            <span className='absolute inset-y-0 left-0 flex w-10 items-center justify-center rounded-sm bg-lime-300 transition-all duration-300 group-hover:w-full'>
              <CustomIcon />
            </span>
          </span>
        </span>
        <span className=''>Book a Demo</span>
      </button>
    </div>
  );
};

const CustomIcon = () => {
  const ICONS_DOTS = [
    1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0,
  ];

  return (
    <div className='grid grid-cols-4 grid-rows-5 gap-px'>
      {ICONS_DOTS.map((dot, idx) => (
        <span
          key={idx}
          className={cn(
            'size-[3px] rounded-full',
            dot ? 'bg-neutral-500' : 'bg-transparent'
          )}
        />
      ))}
    </div>
  );
};

