import { useSelectedObject } from '../../Providers/WorkProvider';
import { Divider } from '../Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
      <section className={'swiper-custom-wrapper'}>
        <div className={'swiper-custom-content'}>
          <h2>Wireframes</h2>
          <p>
            Das Ziel bestand darin, eine Vielzahl
            von Anwendungen schnell zugänglich
            zu machen, ohne die Benutzer zu
            überfordern. Zusätzlich sollten die
            einzelnen Behandlungen favorisiert
            werden können und die jeweiligen
            Abrechnungsgrundlagen enthalten.
          </p>
        </div>
          <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={3}
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
            {selectedObject?.WIREFRAMES.split(',').map((todo, index) => (
              <li 
                key={index}
                className={'skill'}
              >
              
                <SwiperSlide><img src={todo.trim()} alt="" /></SwiperSlide>
              </li>
            ))}
        </Swiper>
      </section>
    </>
  )
}
