import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";
import CONTENT from './../../assets/content/hero.json'

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <header
        id={'start'}
        className={'hero hero-sub'}
      >
        <h1>
          <p 
          className={'block relative'}
          >
            <span
              className={'relative'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
            >
              {selectedObject?.TITLE}
            </span>
            <span
              className={'stroke absolute md:text-transparent'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={150}
            >
              {selectedObject?.TITLE}
            </span>
          </p>
        </h1>
        <p>
        {selectedObject?.INTRO}
        </p>
        <figure>
          {selectedObject && selectedObject.IMG && (
            <img src={`${process.env.PUBLIC_URL}/${selectedObject.IMG}`} alt={selectedObject.TITLE} />
          )}
        </figure>
      </header>
    </>
  );
}