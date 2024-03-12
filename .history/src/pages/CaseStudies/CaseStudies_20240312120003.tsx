import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };
const  selectedObject  = useSelectedObject();



if (!selectedObject) {
  // Handle the case where selectedObject is undefined, for example, loading state or error
  return <div>Loading...</div>; // You can replace this with your loading component or logic
}


  return (
    <SelectedObjectProvider id={id}>  
      <HeroSub id={'foobar'}/>
    </SelectedObjectProvider>
  );
};