import {Headline} from '../Headline/Headline';
import CONTENT from './../../assets/content/introduction.json'
  ;
import React from 'react';
import {UseViewport} from '../../Providers/ViewportProvider';

interface Intro {
  TITLE: string;
  TEXT: string;
  IMG: string;
}

const loadData: Intro[] = CONTENT;
export const About = (): JSX.Element => {
  const { width } = UseViewport();
  const breakpoint = 768;
  const breakpointTwo = 1024;

  return(
    <div className={'about relative md:flex justify-between items-end lg:w-10/12 mx-auto mt-24 lg:mt-48'}>
      <div className={'relative flex md:block justify-center items-end md:items-start '}>
          <figure
            data-aos={'fade-right'}
            data-aos-once={'true'}
            className={'img-figure relative overflow-hidden w-[280px] lg:w-[350px] h-[500px] xl:h-[650px] -z-[1] md:z-[0]'}
          >
            <img
              className={'relative w-full h-full object-cover scale-x-[-1] rounded-br-220 rounded-bl-220 '}
              src={`assets/img/${loadData[0].IMG}`}
              alt={'me again'}
            />
          </figure>
        {width<breakpoint&&
          <Headline
            delay={250}
            customStyle={'absolute bottom-10 '}
            title={loadData[0].TITLE}
          />
        }
      </div>
      <div className={'w-full top-10 lg:-mt-12'}>
        {width > breakpoint &&
          <Headline
            delay={250}
            customStyle={'relative -left-24'}
            title={loadData[0].TITLE}
            showBorder={true}
          />
        }
        <div
          data-aos={'fade-up'}
          data-aos-once={'true'}
          data-aos-delay={350}
          className={'md:flex justify-end lg:justify-start my-8 md:ml-10 md:my-8 lg:ml-20 lg:my-16'}
        >
          <p className={'about-text text-waterloo font-montserrat text-base tracking-wide leading-6 text-start max-w-[450px]'}>
            {loadData[0].TEXT}
            <p>
              <p className={'pill'}>UX / Ui Konzeption</p>
              <p className={'pill'}>Tailwind</p>
              <p className={'pill'}>React</p>
              <p className={'pill'}>Layout</p>
              <p className={'pill'}>typescript</p>
              <p className={'pill'}>Logo Entwicklung</p>
              <p className={'pill'}>Scss</p>
            </p>
          </p>
        </div>

      </div>
      {width > breakpointTwo &&
        <div
          data-aos={'fade-left'}
          data-aos-once={'true'}
          className={'absolute w-full w-[180px] h-[180px] xl:w-[250px] xl:h-[250px] -right-12 -top-12'}
        >
        </div>
      }
    </div>
  )
}
