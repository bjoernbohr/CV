import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css";
import CONTENT from './../../assets/content/swiper.json';

const loadData = [...CONTENT];

import 'swiper/css';
import {UseViewport} from '../../Providers/ViewportProvider';

export const SwiperCustom = (): JSX.Element => {


  const [currentSlide, setCurrentSlide] = useState<number>();
  const { width } = UseViewport();
  const breakpoint = 640;

  if(typeof currentSlide == 'undefined') {
    setCurrentSlide(0)
  }

  return (
    <div className={'custom-slider relative mx-auto w-full md:w-10/12 mt-24 lg:mt-28'}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={'relative'}
      >
        <SwiperSlide>
          <img src={loadData[1]} alt=""/>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

