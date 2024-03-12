import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';
import { SelectedObjectProvider } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 

  return (
    <SelectedObjectProvider id={"01"}>  
      <HeroSub id={'foobar'}/>
    </SelectedObjectProvider>
  );
};