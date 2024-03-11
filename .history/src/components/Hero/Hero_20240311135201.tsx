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

  return (
    <>
    <header
      id={'start'}
      className={'hero'}
    >
      <div className={'w-full flex items-center justify-center'}>
        <div className={'absolute md:relative flex flex-col items-center justify-center w-full h-auto'}>
          <h1>
            {
              loadData.map(v => {
                const infoVal = Object.values(v['TITLE']);
                return infoVal.map(val => {
                  return (
                    <p 
                    key={val['DELAY']}
                    className={'block relative'}
                    >
                    <span
                      className={'relative'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </span>
                    <span
                      className={'stroke absolute md:text-transparent'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </span>
                 </p>
                  )
                })
              })
            }
          </h1>
          {width>breakpoint&&
            <Text person={loadData[0]} />
          }
        </div>
        <div className={'hero-img-wrapper'}>
          <figure className={'hero-img'}>
            <img
              src={`assets/img/${loadData[0].IMG}`}
              alt={'Hero-img'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={'250'}
              className={'img'}
            />
            <span
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={'50'}
              className={'img absolute bg-waterloo -z-[1]'}
            >
            </span>
          </figure>
        </div>
      </div>
      {width<breakpoint&&
        <Text person={loadData[0]} />
      }
    </header>
    </>
  );
}

