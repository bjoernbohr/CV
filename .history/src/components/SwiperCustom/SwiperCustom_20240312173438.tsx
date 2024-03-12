import { useSelectedObject } from '../../Providers/WorkProvider';
import { Divider } from '../Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css';

export const SwiperCustom = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <Divider
          title={'Wireframes'}
          number={1}
          delay={0}
      />
      <section className={'text-img-wrapper '}>
          <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={3}
          direction={'horizontal'}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper:any) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
