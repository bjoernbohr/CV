import React, {useEffect} from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import "./style.css";

import CONTENT from './../../assets/content/hero.json'
import {UseViewport} from '../../Providers/ViewportProvider';
import { Nav } from '../Nav/Nav';

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
      className={'hero-text'}
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
                  <h3>
                    {val['LABEL']}
                  </h3>
                  <p className={' pt-0.5'}>
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
    <>

    </>
  );
}

