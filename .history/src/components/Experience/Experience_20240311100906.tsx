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
  
          
              </>
            
            )
          })
        })
      }
    </div>
  )
}
