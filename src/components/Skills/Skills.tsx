import React, {useEffect} from 'react';
import AOS from 'aos';
import './style.css';
import CONTENT from './../../assets/content/skills.json'

const loadData = [...CONTENT];
export const Skills = (): JSX.Element => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={'skills-wrapper lg:w-8/12 mx-auto mt-24 md:mt-32 mb-36'}>
      {
        loadData.map(v => {
          const infoVal = Object.values(v['INFO']);
          return infoVal.map((val,i) => {
            let fade = i%2==0?'fade-right':'fade-left';
            return (
              <div
                data-aos={fade}
                data-aos-once={'true'}
                data-aos-delay={250}
                key={val['FROM']}
                className={'skill-container relative flex lg:flex-wrap justify-between w-full xl:w-10/12 mx-auto mt-24 first:mt-0 last:mb-0'}
              >
                <div className={'date w-full flex'}>
                  <h3
                    className={'relative flex flex-col items-center justify-center border border-copperfield text-copperfield text-base font-semibold tracking-widest uppercase bg-copperfield-100 w-fit p-4'}>
                    <span>{val['FROM']}</span>
                    -
                    <span>{val['TO']}</span>
                    <span className={'absolute w-px h-full top-full bg-copperfield'}></span>
                  </h3>
                  <div className={"flex flex-wrap items-center pl-8"}>
                    <div>
                      <h4
                        className={'font-marcellus text-2xl uppercase text-copperfield tracking-widest leading-tight w-full'}>{val['TEXT']}</h4>
                      <p
                        className={'text-waterloo italic font-montserrat text-base tracking-wide leading-6 text-start w-full'}>{val['WO']}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        })
      }
    </div>
  )
}
