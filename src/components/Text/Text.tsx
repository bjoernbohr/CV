import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css';

export const Text = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  if(selectedObject?.SOLUTION) {
    return (
      <section className={'text-wrapper '} >
        <p>
          {selectedObject?.SOLUTION}
        </p>
      </section>
    )
  } else {  
    return <></>
  }

}
