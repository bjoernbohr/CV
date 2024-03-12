import { Link } from 'react-router-dom';
import { useSelectedObject } from '../../Providers/WorkProvider';
import './style.css'

export type CrossSellingProps = {
  title?: string;
}

export const CrossSelling = (props: CrossSellingProps): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <section className={'cross-selling'}>
      <Link to={`/casestudies/${selectedObject?.ID}`}/>
      <h2>{selectedObject?.TITLE}</h2>
    </section>
  );
}

