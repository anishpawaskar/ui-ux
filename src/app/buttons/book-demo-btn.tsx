import { cn } from '@/lib/utils';
import React from 'react';

export const BookDemoBtn = () => {
  const dots = [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0];

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
              <div className='grid grid-cols-4 grid-rows-5 gap-px'>
                {dots.map((dot, i) => {
                  const col = i % 4;

                  return (
                    <span
                      key={i}
                      className={`size-[3px] rounded-full ${
                        dot ? 'animate-pulse bg-neutral-400' : 'bg-transparent'
                      }`}
                      style={{
                        animationDelay: dot ? `${col * 150}ms` : '0ms',
                      }}
                    />
                  );
                })}
              </div>
            </span>
          </span>
        </span>
        <span className=''>Book a Demo</span>
      </button>
    </div>
  );
};

