import React, {useEffect} from 'react';
import AOS from 'aos';
import './style.css';
import CONTENT from '../../assets/content/experience.json'

interface Experience {
  INFO: {
    [key: string]: {
      FROM: string;
      TO: string;
      TEXT: string;
      WO: string;
      SUB?: {
        [key: string]: {
          FROM: string;
          TO: string;
          TEXT: string;
          WO: string;
        };
      };
    };
  };
}
const experiences: Experience[] = CONTENT;

const loadData = [...experiences];
export const Experience = (): JSX.Element => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={'experience-wrapper'}>
      {
        loadData.map(v => {
          const infoVal = Object.values(v['INFO']);
          return infoVal.map((val,i) => {
            return (
              <>
  
                {val['SUB']?
                  Object.values(val['SUB']).map((subData, i) => (
                    <div 
                      key={i}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={250}
                      className={'position sub'}
                    >
                      <div>
                        <p>
                          <span>{subData['TO']}</span>
                          <span>-</span>
                          <span>{subData['FROM']}</span>
                        </p>
                        <h4>{subData['TEXT']}</h4>
                      </div>
                    </div>
                  )):''
                }
              </>
            
            )
          })
        })
      }
    </div>
  )
}
