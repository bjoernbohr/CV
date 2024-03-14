import { useLocation, useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';
import { ViewportProvider } from '../../Providers/ViewportProvider';
import { Divider } from '../../components/Divider/Divider';
import { Text } from '../../components/Text/Text';
import { SwiperWrapper } from '../../components/SwiperWrapper/SwiperWrapper';
import { CrossSelling } from '../../components/CrossSelling/CrossSelling';
import  data  from '../../assets/content/work.json';

export const CaseStudies = (): JSX.Element => {
  const { id } = useParams() as { id: string };
  
  const randomId = Math.floor(Math.random() * Object.keys(data[0].INFO).length);  
  const finalId = randomId === parseInt(id) ? (randomId + 1) % Object.keys(data[0].INFO).length : randomId;

  return (
    <ViewportProvider>  
      <SelectedObjectProvider id={id}>  
          <HeroSub />
          <main>
            <Divider
              title={'Lösung'}
              number={1}
              delay={0}
            />
            <Text />
            <SwiperWrapper /> 
          </main>
      </SelectedObjectProvider>
      <SelectedObjectProvider id={finalId.toString()}>  
        <CrossSelling />
      </SelectedObjectProvider>
    </ViewportProvider>  
  );
};
