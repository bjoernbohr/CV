import { useSelectedObject } from '../../Providers/WorkProvider';
import { Divider } from '../Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './style.css';
import { Headline } from '../Headline/Headline';

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
        <Headline
            title={'Wireframe'}
            showBorder={true}
          />
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
        <div className=['swiper-custom-img-wrapper']>
            <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper:any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.d12NjZNPV8a-M9de9YK6wAHaE8%26pid%3DApi&sp=1710262383Tff1eb21623bd5cb22b0f286e681a6d4170c5427120196a1052ef38251616fd3b" alt="" />
            </SwiperSlide>
            <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TD6WGqz6JbIlNOzQdmVUNAHaGF%26pid%3DApi&sp=1710262383Tcf7fb30ca593c824e749a2ef5e0972aaef4f9963c51870d34bca8a40f1e5106a" alt="" /></SwiperSlide>         
            <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.d12NjZNPV8a-M9de9YK6wAHaE8%26pid%3DApi&sp=1710262383Tff1eb21623bd5cb22b0f286e681a6d4170c5427120196a1052ef38251616fd3b" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fpngimg.com%2Fuploads%2Fsmartphone%2Fsmartphone_PNG8548.png&sp=1710263100Taa300dad27837272ce328c08ecb9e74613f30223d857965c59f504239ca4dd66" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
