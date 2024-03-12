import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';


export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      {selectedObject && Object.keys(selectedObject).map((key) => {      
        console.log(key;)
        return (
          <SwiperCustom
            key={key}
            title={key}
          />
        );)
      }
    </>
  )
}
