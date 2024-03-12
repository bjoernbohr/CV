import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";
import { UseViewport } from "../../Providers/ViewportProvider";

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const { width } = UseViewport();
  const selectedObject = useSelectedObject();
  console.log(selectedObject);
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
            </p>
          </h1>
          {width>768&&
            <div className={'info'}>
              <p>
                {selectedObject?.INTRO}
              </p>
              {selectedObject?.TODOS?
                  <div className={'skilllist'}>
                    <h3>Aufgaben</h3>
                    <ul>
                      {selectedObject?.TODOS.split(',').map((todo, index) => (
                        <li 
                          key={index}
                          className={'skill'}
                        >
                          {todo.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                :''
                }
            </div>
          }
        </div>
        <figure>
          {selectedObject && selectedObject.IMG && (
            <img src={`${process.env.PUBLIC_URL}/${selectedObject.IMG}`} alt={selectedObject.TITLE} />
          )}
        </figure>
          {width<768&&
            <div className={'info'}>
              <p>
                {selectedObject?.INTRO}
              </p>
          
              {selectedObject?.TODOS?
                <div className={'skilllist'}>
                  <h3>Aufgaben</h3>
                  <ul>
                    {selectedObject?.TODOS.split(',').map((todo, index) => (
                      <li 
                        key={index}
                        className={'skill'}
                      >
                        {todo.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              :''
              }
            </div>
          }
      </header>
    </>
  );
}