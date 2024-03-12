import { useSelectedObject } from '../../Providers/WorkProvider';
import { SwiperCustom } from '../SwiperCustom/SwiperCustom';

export const SwiperWrapper = (): JSX.Element => {
  const selectedObject = useSelectedObject();
  const skills = ['JavaScript', 'Teamwork','React', 'Typescript', 'Ausbilder', 'GIT', 'Grafik Design', 'UX/UI-Konzeption', 'Selbständigkeit', 'SCSS', 'Logo-Entwicklung', 'Brand-Indentity'];

  return (
    <>
      {selectedObject?.ASSETS && Object.values(selectedObject.ASSETS).map((item, index) => (
        <SwiperCustom
          key={index}
          title={item.TITLE}
          text={item.INFO}
          images={skills}
        />
      ))}
    </>
  );
};
