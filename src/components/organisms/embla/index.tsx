'use client';

import { ReactNode, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './styles.css';

type ComponentProps = {
  children: ReactNode | ReactNode[],
  className?: string,
  dragFree?: boolean
};

export default function EmblaSlides(props: ComponentProps) {

  const [progress, setProgress] = useState(0);
  const { dragFree } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree });

  useEffect(() => {
    if ( !emblaApi ) return;

    const updateProgress = () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setProgress(progress);
    };

    emblaApi.on('scroll', updateProgress);
    updateProgress();
  }, [ emblaApi ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className={`embla__container ${props.className}`}>
        {props.children}
      </div>

      {/* barra de progresso */}
      <div className="relative h-1 mt-[10px]">
        <div
          className="absolute top-0 left-0 h-full bg-primary-action rounded-4xl transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
