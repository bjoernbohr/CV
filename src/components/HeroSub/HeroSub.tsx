import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";
import { UseViewport } from "../../Providers/ViewportProvider";

interface HeroSubProps {
  id?: string;
}

interface InfoProps {
  intro?: string;
  todos?: string;
}

const Info: React.FC<InfoProps> = ({ intro, todos }) => {
  return (
    <div 
      className={'info'}
      data-aos={'fade-up'}
      data-aos-once={'true'}
      data-aos-delay={`150`}
    >
      <p>
        {intro}
      </p>
      {todos && (
        <div className={'skilllist'}>
          <h3>Aufgaben</h3>
          <ul>
            {todos.split(',').map((todo, index) => (
              <li 
              key={index} 
              className={'skill'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={`${index}10`}
              >
                {todo.trim()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const { width } = UseViewport();
  const selectedObject = useSelectedObject();

  return (
    <>
      <header
        id={'start'}
        className={'hero hero-sub'}
      >
        <div className={'hero-sub-content'}>
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
              {selectedObject?.PROJECTLINK ?
                <a 
                  className={'btn-primary'} 
                  href={selectedObject?.PROJECTLINK} 
                  title={`Link zu ${selectedObject?.TITLE} Projektseite`}
                >
                  Ansehen
                </a>
                : ''
              }
            </p>
          </h1>
          {width>768&&
            <Info intro={selectedObject?.INTRO} todos={selectedObject?.TODOS} />
          }
        </div>
        <figure>
          {selectedObject && selectedObject.IMG && (
            <img 
            src={`${process.env.PUBLIC_URL}/${selectedObject.IMG}`} 
            alt={selectedObject.TITLE} 
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={`250`}
            />
          )}
          <span
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={`50`}
          >
          </span>
        </figure>
          {width<768&&
            <Info intro={selectedObject?.INTRO} todos={selectedObject?.TODOS} />
          }
      </header>
    </>
  );
}