import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css';

export const Text = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <section className={'text-wrapper '} >
      <p>
        {selectedObject?.SOLUTION}
      </p>
    </section>
  )
}
