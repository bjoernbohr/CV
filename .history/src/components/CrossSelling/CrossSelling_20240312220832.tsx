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
    <section className={'cross-selling'}>
      <Divider title={'Weitere Projekte'} />
      <Link to={`/casestudies/${selectedObject?.ID}`}/>
      <h2>{selectedObject?.TITLE}</h2>
      <label>Auch Interessant</label>
    </section>
  );
}

