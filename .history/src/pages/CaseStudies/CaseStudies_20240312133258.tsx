import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };
  console.log(id)
  return (
    <SelectedObjectProvider id={"0"}>  
        <HeroSub />
    </SelectedObjectProvider>
  );
};