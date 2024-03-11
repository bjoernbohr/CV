import {Headline} from '../Headline/Headline';
import CONTENT from './../../assets/content/introduction.json';
import {UseViewport} from '../../Providers/ViewportProvider';
import 'aos/dist/aos.css';

import './style.css';

interface Intro {
  TITLE: string;
  TEXT: string;
  IMG: string;
}

const skills = ['JavaScript', 'Teamwork','React', 'Typescript', 'Ausbilder', 'GIT', 'Grafik Design', 'UX/UI-Konzeption', 'Selbständigkeit', 'SCSS', 'Logo-Entwicklung', 'Brand-Indentity'];

const skillSpans = skills.map((skill, index) => (
  <li className="skill" key={index}>
    {skill}
  </li>
));

const loadData: Intro[] = CONTENT;
export const About = (): JSX.Element => {
  const { width } = UseViewport(); 
  return (
    <div className={'about'}>
      <div className={'relative w-full flex justify-center items-start'} >
        {
          width<768&&(
            <Headline
            title={loadData[0].TITLE}
            showBorder={true}
          />
          )
        }

        <div className={'about-img-wrapper'}>
            <figure 
              className={'about-img'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={300}
              data-aos-offset={250}
            >
              <img
                src={`assets/img/${loadData[0].IMG}`}
                alt={'about-img'}
                className={'img'}
              />
              <span
                className={'img absolute bg-waterloo -z-[1]'}
              >
              </span>
            </figure>
          </div>
        </div>
      <div className={'about-content'}>
      {
          width>768&&(
            <Headline
            title={loadData[0].TITLE}
            showBorder={true}
          />
          )
        }
        <div className={'about-text'} >
          <p>
          {loadData[0].TEXT}
          </p>
      
          <div className={'skillist'}>
            <h3>Skillset</h3>
            <ul>
              {skillSpans}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
