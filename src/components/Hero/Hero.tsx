import React, {useEffect} from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import "./style.css";

import CONTENT from './../../assets/content/hero.json'
import {UseViewport} from '../../Providers/ViewportProvider';

interface Person {
  TEXT: string;
  IMG: string;
  TITLE: {
    '01': {
      TEXT: string;
      DELAY: string;
    },
    '02': {
      TEXT: string;
      DELAY: string;
    },
  };
  INFO: {
    '01': {
      LABEL: string;
      TEXT: string;
    },
    '02': {
      LABEL: string;
      TEXT: string;
    },
  };
}

interface Props {
  person?: Person;
}

const loadData: Person[] = CONTENT;

const Text = ({ person }: Props): JSX.Element => {

  return(
    <div
      className={'flex justify-between w-full lg:w-10/12 mt-8 lg:mt-12'}
    >
      <div className={'text-md font-montserrat tracking-wide'}>
        {
          loadData.map(v => {
            const infoVal = Object.values(v['INFO']);
            return infoVal.map(val => {
              return (
                <div
                  data-aos={'fade-right'}
                  data-aos-delay={'850'}
                  data-aos-once={'true'}
                  key={val['LABEL']}
                  className={'first:mb-4'}
                >
                  <h4 className={'text-copperfield text-base font-semibold tracking-widest uppercase'}>
                    {val['LABEL']}
                  </h4>
                  <p className={'text-waterloo text-base tracking-widest pt-0.5'}>
                    {val['TEXT']}
                  </p>
                </div>
              )
            })
          })
        }
      </div>
      { person && (
        <p
          data-aos={'fade-left'}
          data-aos-once={'true'}
          data-aos-delay={'850'}
          className={'text-waterloo font-montserrat text-base tracking-wide leading-6 text-end w-[200px] xl:w-[220px]'}
        >
          {person.TEXT}
        </p>
      )}
    </div>
  )
}


export const Hero = (): JSX.Element => {
  const { width } = UseViewport();
  const breakpoint = 1024;

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <header
      id={'start'}
      className={'hero container relative flex flex-wrap items-center justify-center w-full mx-auto mt-12 px-6 scroll-mt-32'}
    >
      <div className={'w-full flex items-center justify-center xl:w-10/12'}>
        <div className={'absolute flex flex-col items-center justify-center w-full h-auto'}>
          <h1 className={'font-marcellus text-5xl md:text-8xl lg:text-7xl xl:text-8xl uppercase text-copperfield tracking-widest leading-tight text-center w-full lg:mt-64'} >
            {
              loadData.map(v => {
                const infoVal = Object.values(v['TITLE']);
                return infoVal.map(val => {
                  return (
                    <span
                      key={val['DELAY']}
                      className={'block relative'}
                    >
                    <p
                      className={'font-marcellus relative -z-[1]'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </p>
                    <p
                      className={'stroke absolute md:text-transparent inset-0 z-[1]'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </p>
                 </span>
                  )
                })
              })
            }
          </h1>
          {width>breakpoint&&
            <Text person={loadData[0]} />
          }
        </div>
        <figure className={'hero-img relative w-full overflow-hidden rounded-tr-220 rounded-tl-220  max-w-[280px] xl:max-w-[350px] h-[500px] xl:h-[650px] -z-[1]'}>
          <img
            src={`assets/img/${loadData[0].IMG}`}
            alt={'Hero-img'}
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={'250'}
            className={'img rounded-tr-220 rounded-tl-220 w-full h-full object-cover'}
          />
          <span
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={'50'}
            className={'absolute bg-waterloo w-full h-full rounded-tr-220 rounded-tl-220 inset-0 -z-[1]'}
          >
          </span>
        </figure>
      </div>
      {width<breakpoint&&
        <Text person={loadData[0]} />
      }
    </header>
  );
}

