import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG_02 from './../../assets/img/bjoern_02.jpg'
import CONTENT from './../../assets/content/casestudies.json'

import "./style.css";

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';
import {UseViewport} from '../../Providers/ViewportProvider';

const loadData = [...CONTENT];

type TextProps = {
  textOne: string;
  textTwo: string;
}

const Text = (props:TextProps): JSX.Element => {
  return (
    <>
      <h4
        data-aos={'fade-up'}
        data-aos-delay={450}
        data-aos-once={'true'}
        className={'title relative sm:absolute font-marcellus text-4xl md:text-7xl xl:text-8xl uppercase text-copperfield tracking-widest leading-tight text-center top-3 sm:pt-12 sm:top-1/2 sm:-translate-y-1/2 md:z-[-1]'}
      >
        <p>
          {props.textOne}
        </p>
        <p>
          {props.textTwo}
        </p>
      </h4>
      <h4
        data-aos={'fade-up'}
        data-aos-delay={450}
        data-aos-once={'true'}
        className={'title stroke relative hidden sm:block sm:absolute font-marcellus text-4xl md:text-7xl xl:text-8xl uppercase text-transparent tracking-widest leading-tight text-center top-3 sm:pt-12 sm:top-1/2 sm:-translate-y-1/2'}
      >
        <p>
          {props.textOne}
        </p>
        <p>
          {props.textTwo}
        </p>
      </h4>
      </>
  )
}

export const SwiperCustom = (): JSX.Element => {
  const [allSlides, setAllSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<number>();
  const { width } = UseViewport();
  const breakpoint = 640;

  if(typeof currentSlide == 'undefined') {
    setCurrentSlide(0)
  }

  return (
    <div className={'custom-slider relative mx-auto w-full md:w-10/12 mt-24 lg:mt-28'}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setAllSlides(swiper.slides.length - 1)}
        className={'relative'}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            centeredSlides: true
          },
        }}
      >
        {
          loadData.map(v => {
            const infoVal = Object.values(v['STUDIES']);
            return infoVal.map(val => {
              return (
                <SwiperSlide className={'min-h-[550px] h-full relative  sm:pb-10'}>
                  <div className={'swiper-content relative sm:flex flex-col  items-center'}>
                    <Text
                      textOne={val['NAME'].split(';')[0]}
                      textTwo={val['NAME'].split(';')[1]}
                    />
                    <figure
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      className={'w-full h-full overflow-hidden h-[550px] w-full sm:max-w-[320px] pt-4 sm:pt-10'}
                    >
                      <img
                        className={'w-full h-full object-cover  rounded-bl-full rounded-br-full'}
                        src={IMG_02}
                        alt=""
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              )
            })
          })
        }
        {width>breakpoint?
          <div className={`swiper-pagination-num absolute flex justify-between top-0 left-1/2 -translate-x-1/2 w-[320px] z-[1]`}>
            <span className={'text-waterloo text-md font-semibold tracking-wide bg-copperfield-100 px-4'}>{currentSlide}</span>
            <span className={'text-waterloo font-semibold text-md tracking-wide bg-copperfield-100 px-4'}>{allSlides}</span>
          </div>
        :''}
        <span className={'absolute border-2 border-copperfield pointer-events-none w-11/12 sm:w-8/12 max-w-[400px] lg:max-w-[350px] -top-0 sm:top-20 bottom-5 sm:-bottom-0 mx-auto left-1/2 -translate-x-1/2 rounded-bl-full rounded-br-full z-[1]'}></span>
    </Swiper>
    </div>
  );
};

