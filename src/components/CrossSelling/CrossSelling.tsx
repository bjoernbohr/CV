import { Link } from 'react-router-dom';
import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css'
import { Divider } from '../Divider/Divider';

export type CrossSellingProps = {
  title?: string;
}

export const CrossSelling = (props: CrossSellingProps): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <>
      <Divider title={'Weitere Projekte'} />
      <section className={'cross-selling'}>
        <Link to={`/./CV/casestudies/${selectedObject?.ID}#start`}/>
        <div className={'title'}>
          <h2
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={300}
              data-aos-offset={150}
          >
            {selectedObject?.TITLE}
            </h2>
        </div>
        <div className={'label'}>
          <label 
            className={'btn-primary'} 
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={450}
            data-aos-offset={150}
          >
            Auch Interessant
            </label>
        </div>
        <span className={'d-element'}></span>
        <span className={'d-element'}></span>
      </section>
    </>
  );
}

