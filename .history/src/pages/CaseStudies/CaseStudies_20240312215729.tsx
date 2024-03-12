import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';
import { ViewportProvider } from '../../Providers/ViewportProvider';
import { Divider } from '../../components/Divider/Divider';
import { Text } from '../../components/Text/Text';
import { SwiperWrapper } from '../../components/SwiperWrapper/SwiperWrapper';
import { CrossSelling } from '../../components/CrossSelling/CrossSelling';
import  data  from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
const randomId = Math.floor(Math.random() * data.length);
console.log(randomId)
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
      <SelectedObjectProvider id={randomId.toString()}>  
        <CrossSelling />
      </SelectedObjectProvider>
    </ViewportProvider>  
  );
};