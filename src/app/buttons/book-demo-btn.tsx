'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export const BookDemoBtn = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='flex h-screen items-center justify-center bg-slate-50'>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'group relative h-10 cursor-pointer overflow-hidden rounded-md bg-gray-800 pr-3 pl-14 text-sm font-semibold text-white'
        )}
      >
        <span className='absolute inset-0 left-0 p-0.5'>
          <span className='relative inline-block size-full'>
            <motion.span
              animate={{
                width: hovered ? '100%' : 40,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className={
                'absolute inset-y-0 left-0 rounded-sm bg-lime-300 px-3'
              }
            >
              <motion.span
                initial={false}
                animate={hovered ? 'open' : 'closed'}
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.04,
                      staggerDirection: -1,
                    },
                  },
                }}
                className='flex size-full items-center justify-between'
              >
                {Array.from({ length: 5 }, (_, idx) => idx).map((item) => {
                  return (
                    <motion.span
                      key={item}
                      variants={{
                        open: {
                          opacity: 1,
                          scale: 1,
                          x: 0,
                        },
                        closed:
                          item === 0
                            ? {
                                opacity: 1,
                                scale: 1,
                                x: 0,
                              }
                            : {
                                opacity: 0,
                                scale: 0.5,
                                x: -10,
                              },
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className={cn(
                        'flex items-center',
                        item === 0 && 'shrink-0'
                      )}
                    >
                      <CustomIcon />
                    </motion.span>
                  );
                })}
              </motion.span>
            </motion.span>
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

