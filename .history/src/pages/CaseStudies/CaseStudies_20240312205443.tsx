import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';
import { ViewportProvider } from '../../Providers/ViewportProvider';
import { Divider } from '../../components/Divider/Divider';
import { Text } from '../../components/Text/Text';
import { SwiperWrapper } from '../../components/SwiperWrapper/SwiperWrapper';


export const CaseStudies = (): JSX.Element => {

const { id } = useParams() as { id: string };

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
    </ViewportProvider>  
  );
};