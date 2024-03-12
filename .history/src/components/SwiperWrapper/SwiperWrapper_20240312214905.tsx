import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';

export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  return (
    <>
      {selectedObject?.ASSETS && Object.values(selectedObject.ASSETS).map((item, index) => (
        <SwiperCustom
          key={index}
          title={item.TITLE}
          num={index + 1}
          text={item.INFO}
          images={item.IMAGES.split(',').map(image => image.trim())} 
        />
      ))}
    </>
  );
};
