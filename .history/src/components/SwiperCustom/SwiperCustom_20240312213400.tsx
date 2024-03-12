import { useSelectedObject } from '../../Providers/WorkProvider';
import { Divider } from '../Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export type CustomSwiperProps = {
  title?: string;
  text?: string;
  link?: string;
  images?: any;
}

export const SwiperCustom = (props: CustomSwiperProps): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <>
      <Divider
        title={props.title}
        number={1}
        delay={0}
      />
      <section className={'swiper-custom-wrapper'}>
        <div className={'swiper-custom-content'}>
          <div className={'title'}>
            <h2
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={350}
              data-aos-offset={250}
            >
              {props.title}
            </h2>
            <span
              className={'stroke'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={350}
              data-aos-offset={350}
            >
              {props.title}
            </span>
          </div>
          <p>
            {props.text}
            {props.link ?
              <a href={props.link} title={`Link zu ${props.title}`}>Ansehen</a>
              : ''
            }
          </p>
        </div>
        <div className={'swiper-custom-swipes'}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
          >
            {props.images && props.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <span className={'d-element'}></span>
        <span className={'d-element'}></span>
      </section>
    </>
  )
}

export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <>
      {selectedObject?.ASSETS && Object.values(selectedObject.ASSETS).map((item, index) => (
        <SwiperCustom
          key={index}
          title={item.TITLE}
          text={item.INFO}
          images={item.IMAGES.split(',').map(image => image.trim())} // Split the string and trim whitespace
        />
      ))}
    </>
  );
};
