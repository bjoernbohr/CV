import { useSelectedObject } from '../../Providers/WorkProvider';

export type CrossSellingProps = {
  title?: string;
}

export const CrossSelling = (props: CrossSellingProps): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <section className={'cross-selling'}>
      <h2>{selectedObject?.TITLE}</h2>
    </section>
  );
}

