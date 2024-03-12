import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';


export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <SwiperCustom 
      title={'wireframes'} />
    </>
  )
}
