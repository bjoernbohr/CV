import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';


export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      {selectedObject && Object.keys(selectedObject).map((key) => {
        const asset = selectedObject[key];
        if (asset?.ASSETS) {
          return Object.values(asset.ASSETS).map((item, index) => (
            <SwiperCustom
              key={index}
              title={item.TITLE}
              text={item.INFO}
              link={item.URL}
              images={item.IMAGES.split(', ')} // Split the images string into an array
            />
          ));
        }
        return null;
      })}
    </>
  );
}
