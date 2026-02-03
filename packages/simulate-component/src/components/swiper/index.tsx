//@ts-nocheck
import { useState } from 'react';
import { useLocal } from '@/local';
import { useImageHeight } from '@/hooks/useImageHeight';

interface SwiperType<T> {
  indicatorDots: boolean;
  direction?: 'horizontal' | 'vertical';
  autoplayInterval: number;
  loop?: boolean;
  type: number;
  render: Function;
  data: Array<T>;
  imgHeight: { height: number; width: number };
  autoplay: boolean;
}

export function SmoothSwiper<T>({
  indicatorDots = true,
  direction = 'horizontal',
  data,
  type,
  render,
  imgHeight,
  autoplay,
}: SwiperType<T>) {
  const [current, setCurrent] = useState(0);
  const { Swiper, Skeleton } = useLocal();

  const heightSize = useImageHeight(type, imgHeight);

  const handleSwiperChange = (e:any) => {
    if(e.detail) {
      const { current } = e.detail;
      setCurrent(current);
    } else {
      setCurrent(e);
    }
  };

  return (
    <>
      {data.length > 0 ? (
        <Swiper
          loop
          indicator={indicatorDots}
          direction={direction}
          height={heightSize}
          autoplay={autoplay}
          onChange={handleSwiperChange}
        >
          {data.map((item: T, index: number) => (
            <Swiper.Item key={index}>
              {render(item, current, index)}
            </Swiper.Item>
          ))}
        </Swiper>
      ) : (
        <Skeleton
          animated
          style={{
            '--width': '100%',
            '--height': heightSize
          }}
        />
      )}
    </>
  );
}
