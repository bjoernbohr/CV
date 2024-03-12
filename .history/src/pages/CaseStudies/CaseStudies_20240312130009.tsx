import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };

  return (
    <SelectedObjectProvider id={"01"}>  
        <HeroSub id={'foobar'}/>
    </SelectedObjectProvider>
  );
};