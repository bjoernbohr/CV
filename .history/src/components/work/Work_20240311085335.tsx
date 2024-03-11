import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS für AOS einbinden
import './style.css';
import CONTENT from './../../assets/content/work.json';

const loadData = [...CONTENT];

export const Work = (): JSX.Element => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    AOS.init();

    const handleMouseMove = (e: MouseEvent) => {
      const container = e.currentTarget as HTMLDivElement;
      const img = container.querySelector('img');
      if (img && !img.classList.contains('visible')) {
        img.classList.add('visible');
      }
      if (img) {
        const rect = container.getBoundingClientRect();
        const offsetX = e.pageX - rect.left;
        const offsetY = e.pageY - rect.top;
        const maxX = rect.width - img.width;
        const maxY = rect.height - img.height;
        img.style.transform = `translate3d(${Math.min(maxX, Math.max(0, offsetX))}px, ${Math.min(maxY, Math.max(0, offsetY))}px, 0)`;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const img = (e.currentTarget as HTMLDivElement).querySelector('img');
      if (img) {
        img.classList.remove('visible');
      }
    };

    const addListeners = () => {
      containerRefs.current.forEach(element => {
        if (element) {
          element.addEventListener('mousemove', handleMouseMove);
          element.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    };

    addListeners();

    return () => {
      containerRefs.current.forEach(element => {
        if (element) {
          element.removeEventListener('mousemove', handleMouseMove);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className={'work-wrapper'}>
      {loadData.map((v, index) => {
        const infoVal = Object.values(v['INFO']);
        return infoVal.map((val, i) => {
          let fade = i % 2 == 0 ? 'fade-right' : 'fade-left';
          return (
            <div
              ref={(el) => (containerRefs.current[index * infoVal.length + i] = el)}
              data-aos={fade}
              data-aos-once={'true'}
              data-aos-delay={250}
              key={`${val['TITLE']}-${index}`}
              className={'work-container relative flex flex-wrap justify-between w-full first:mt-24 mt-12 first:mt-0 last:mb-0 w-full'}
            >
              <a href={val['URL']} title={`${val['TITLE']}-${index}`} target={'_BLANK'}></a>
              <span className={'num text-waterloo text-base tracking-widest font-semibold uppercase whitespace-nowrap bg-copperfield-100 mb-4 overflow-hidden'}>{`0${i+1}. `}</span>
              <div className={'date w-full flex'}>
                <h2 data-aos-delay="250" data-aos="fade-up" data-aos-once="true"
                    className="relative font-marcellus text-4xl md:text-7xl uppercase text-copperfield tracking-widest leading-tight aos-init aos-animate w-full">
                  <span className="non-stroke opacity-0 absolute -z-[1]">{val['TITLE']}</span>
                  <span className="stroke relative text-transparent inset-0 z-[2]">{val['TITLE']}</span>
                </h2>
              </div>
              <p className={'text-waterloo italic font-montserrat text-base tracking-wide leading-6 text-start w-full'}>{val['SUB']}</p>
              <img src={val['IMG']} alt="" className="absolute top-0 left-0 transform transition-transform duration-300 delay-250 ease-in-out w-full h-full object-cover"/> {/* Hier war ein Tippfehler (a) */}
            </div>
          );
        });
      })}
    </div>
  );
};
