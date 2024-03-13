import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css';

export const Text = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  if(selectedObject?.SOLUTION) {
    return (
      <section 
        className={'text-wrapper '} 
        data-aos={'fade-up'}
        data-aos-once={'true'}
        data-aos-delay={300}
        data-aos-offset={150}
      >
        <p>
          {selectedObject?.SOLUTION}
        </p>
      </section>
    )
  } else {  
    return <></>
  }

}
