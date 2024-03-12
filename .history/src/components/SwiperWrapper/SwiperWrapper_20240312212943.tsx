import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';

export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <>
      {selectedObject?.ASSETS && Object.values(selectedObject.ASSETS).map((item, index) => (
        <>
          {console.log(item.IMAGES)}
      
        </>
      ))}
    </>
  );
};
