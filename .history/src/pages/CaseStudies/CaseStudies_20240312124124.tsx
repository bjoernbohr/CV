import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };
const selectedObject = useSelectedObject();
  return (
    <SelectedObjectProvider id={id}>  
      <HeroSub id={'foobar'}/>
    </SelectedObjectProvider>
  );
};