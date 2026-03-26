import { cn } from '@/lib/utils';

export const NoiseButton = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-slate-950'>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
            <feTurbulence type='fractalNoise' baseFrequency={1} />
            <feColorMatrix type='saturate' values='0' result='grayNoise' />
            {/* Blend noise only with the background image, not the full source */}
            <feBlend
              in='grayNoise'
              in2='SourceGraphic'
              mode='overlay'
              result='blended'
            />
            {/* Composite back so only the element shape is used, preserving alpha */}
            <feComposite in='blended' in2='SourceGraphic' operator='in' />
          </filter>
        </defs>
      </svg>
      <button
        className={cn(
          'relative h-10 overflow-hidden rounded-full px-4 text-sm font-semibold text-white text-shadow-sm',
          'bg-linear-to-b from-violet-600 to-blue-300',
          'before:absolute before:top-px before:left-1/2 before:h-1 before:w-full before:-translate-1/2 before:bg-[linear-gradient(to_bottom,var(--color-violet-500),var(--color-violet-600),var(--color-violet-500))] before:content-[""]',
          'after:absolute after:-bottom-0.5 after:left-1/2 after:h-1 after:w-full after:-translate-1/2 after:bg-[linear-gradient(to_bottom,var(--color-blue-300),var(--color-blue-200))] after:content-[""]'
        )}
        style={{ filter: 'url(#noise)' }}
      >
        <span className='relative z-10'>Get started</span>
      </button>
    </div>
  );
};

