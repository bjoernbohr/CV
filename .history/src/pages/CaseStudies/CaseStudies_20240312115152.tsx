import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';
import { SelectedObjectProvider } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };


  return (
    <SelectedObjectProvider id={id}>  
      <HeroSub id={'foobar'}/>
    </SelectedObjectProvider>
  );
};