import { Divider } from '../Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export type CustomSwiperProps = {
  title?: string;
  num?: number;
  text?: string;
  link?: string;
  images?: string[];
  url?: string;
}

export const SwiperCustom = (props: CustomSwiperProps): JSX.Element => {

  return (
    <>
      <Divider
        title={props.title}
        number={props.num}
        delay={0}
      />
      <section className={'swiper-custom-wrapper'}>
        <div className={'swiper-custom-content'}>
          <div className={'title'}>
            <h2
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={250}
              data-aos-offset={250}
            >
              {props.title}
            </h2>
            <span
              className={'stroke'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={350}
              data-aos-offset={250}
            >
              {props.title}
            </span>
          </div>
          <div>            <p
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={300}
              data-aos-offset={250}
            >
              {props.text}
            </p>
            {props.url ?
              <a 
                className={'btn-primary'} 
                href={props.url} 
                target={'_blank'}
                title={`Link zu ${props.title}`}
                data-aos={'fade-up'}
                data-aos-once={'true'}
                data-aos-delay={300}
                data-aos-offset={250}
              >
                Ansehen
              </a>
              : ''
            }
          </div>
        </div>
          <div 
            className={'swiper-custom-swipes'}
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={250}
            data-aos-offset={250}
          >    
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
            >

              {props.images && props.images.map((image:string, index:any) => (
                <SwiperSlide key={index}>
                  <img src={`../assets/img/${image}`} alt="" />
                  <img className={'bg'} src={`../assets/img/${image}`} alt="" />
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
