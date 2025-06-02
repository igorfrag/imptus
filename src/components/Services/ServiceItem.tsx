import { FC, memo } from 'react';
import type { StaticImageData } from 'next/image';

interface ServiceItemProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const ServiceItem: FC<ServiceItemProps> = memo(({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center text-white max-w-[180px]">
    <div
      className="flex items-center justify-center mb-2 shadow"
      style={{
        width: 200,
        height: 200,
        borderRadius: 15,
        backgroundColor: 'var(--color-primary-azulclaro)',
      }}
    >
      <img
        src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src}
        alt={title}
        style={{
          width: 128,
          height: 128,
          filter:
            'brightness(0) saturate(100%) invert(49%) sepia(87%) saturate(1633%) hue-rotate(338deg) brightness(102%) contrast(105%)',
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div
      className="flex flex-col items-center"
      style={{ fontFamily: 'var(--font-barlow-semi-condensed)' }}
    >
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
