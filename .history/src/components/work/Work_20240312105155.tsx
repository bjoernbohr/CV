import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './style.css';
import CONTENT from '../../assets/content/work.json';

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
    <>
      <div className={'work-wrapper'}>
        {loadData.map((v, index) => {
          const infoVal = Object.values(v['INFO']);
          return infoVal.map((val, i) => {
            let fade = i % 2 === 0 ? 'fade-right' : 'fade-left';
            return (
              <div
                ref={(el) => (containerRefs.current[index * infoVal.length + i] = el)}
                data-aos={fade}
                data-aos-once={'true'}
                data-aos-delay={250}
                key={`${val['TITLE']}-${index}`}
                className={'work-item'}
              >
                <Link to={`/casestudies/${i}/${val['TITLE']}`} title={val['TITLE']} />
                <span className={'number'}>{`0${i+1}. `}</span>
                <div className={'title'}>
                  <h2 data-aos-delay="250">
                    <span>{val['TITLE']}</span>
                    <span className={'stroke'}>{val['TITLE']}</span>
                  </h2>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 45 45"><path data-name="layer1" d="M25.004 16a3 3 0 0 0 0 6h12.752l-20.87 20.87a3 3 0 0 0 4.243 4.242L42 26.242v12.557a3 3 0 0 0 6 0V16z" fill="none"></path></svg>
                </div>
              
                <h3 className={'subtitle'}>{val['SUB']}</h3>
                <img src={val['IMG']} alt="" />
              </div>
            );
          });
        })}
      </div>
      <span className={'d-element'}></span>
      <span className={'d-element'}></span>
    </>
  );
};
