import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css';

export const TextImages = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <section className={'text-img-wrapper '} >
      <p>
        {selectedObject?.SOLUTION}
      </p>
    </section>
  )
}
