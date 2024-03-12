import { useSelectedObject } from '../../Providers/WorkProvider';
import { Divider } from '../../components/Divider/Divider';

import './style.css';

export const Swiper = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <Divider
          title={'Wireframes'}
          number={1}
          delay={0}
      />
      <section className={'text-img-wrapper '}>
        <p>
          {selectedObject?.SOLUTION}
        </p>
      </section>
    </>
  )
}
