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
          <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.d12NjZNPV8a-M9de9YK6wAHaE8%26pid%3DApi&sp=1710262383Tff1eb21623bd5cb22b0f286e681a6d4170c5427120196a1052ef38251616fd3b" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TD6WGqz6JbIlNOzQdmVUNAHaGF%26pid%3DApi&sp=1710262383Tcf7fb30ca593c824e749a2ef5e0972aaef4f9963c51870d34bca8a40f1e5106a" alt="" /></SwiperSlide>          <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.d12NjZNPV8a-M9de9YK6wAHaE8%26pid%3DApi&sp=1710262383Tff1eb21623bd5cb22b0f286e681a6d4170c5427120196a1052ef38251616fd3b" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TD6WGqz6JbIlNOzQdmVUNAHaGF%26pid%3DApi&sp=1710262383Tcf7fb30ca593c824e749a2ef5e0972aaef4f9963c51870d34bca8a40f1e5106a" alt="" /></SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
