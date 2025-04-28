'use client';

import { ReactNode, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton } from '@/components/atoms/dotButton';
import { useDotButton } from '@/hooks/embla/useDotButton';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import './styles.css';

type EmblaOptions = EmblaOptionsType & {
  progressBar?: boolean,
  dotNavigation?: boolean,
  autoplay?: boolean
  autoplayOptions?: AutoplayOptionsType
};

type ComponentProps = {
  children: ReactNode | ReactNode[],
  className?: string,
  options?: EmblaOptions
};

export default function EmblaSlides( props: ComponentProps ) {

  const [progress, setProgress] = useState( 0 );
  const { className, options, children } = props;
  const emblaPlugins: any[] = [];
  if (options?.autoplay) emblaPlugins.push(Autoplay(options.autoplayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel( options, emblaPlugins );
  const {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  } = useDotButton( emblaApi );

  useEffect(() => {
    if ( !emblaApi ) return;

    const updateProgress = () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setProgress( progress );
    };

    emblaApi.on('scroll', updateProgress);
    updateProgress();
  }, [ emblaApi ]);

  return (
    <div 
      className={`embla ${options && options.dotNavigation && 'relative'}`} 
      ref={emblaRef}>

      <div className={`embla__container ${className}`}>
        {children}
      </div>

      {/* barra de progresso */}
      { options && options.progressBar && (
        <div className="relative h-1 mt-[10px]">
          <div
            className="absolute top-0 left-0 h-full bg-primary-action rounded-4xl transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      { options && options.dotNavigation && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-x-2">
          { scrollSnaps.map((_, index) => (
            <DotButton
              key={ index }
              onClick={() => onDotButtonClick( index )}
              className={`w-2.5 h-2.5 rounded-full ${selectedIndex === index ? 'bg-primary' : 'bg-primary/15'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
