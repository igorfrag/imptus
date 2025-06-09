import { FC, memo } from 'react';
import type { StaticImageData } from 'next/image';

interface ServiceItemProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const ServiceItem: FC<ServiceItemProps> = memo(({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center text-white max-w-[180px] ">
    <div className="drop-shadow-2xl/50">
      <div
        className="flex items-center justify-center mb-2 "
        style={{
          height: 200,
          backgroundColor: 'var(--color-primary-azulclaro)',
          aspectRatio: 'cos(30deg)',
          clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
        }}
      >
        <img
          src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src}
          alt={title}
          style={{
            width: 96,
            height: 96,
            filter:
              'brightness(0) saturate(100%) invert(49%) sepia(87%) saturate(1633%) hue-rotate(338deg) brightness(102%) contrast(105%)',
          }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <div className="flex flex-col items-center font-barlow">
      <h3
        style={{
          color: 'var(--color-neutral-branco)',
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '28px',
          letterSpacing: 0,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'var(--color-neutral-branco)',
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '28px',
          letterSpacing: 0,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  </div>
));

export default ServiceItem;
