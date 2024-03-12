import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {

const { id } = useParams() as { id: string };

  return (
    <SelectedObjectProvider id={"2"}>  
        <HeroSub />
    </SelectedObjectProvider>
  );
};