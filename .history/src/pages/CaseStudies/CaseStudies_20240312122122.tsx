import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
const { id } = useParams() as { id: string };
const selectedObject = useSelectedObject();

  return (
    <SelectedObjectProvider id={id}>  
        <>
        {console.log(selectedObject.TITLE)}

      <HeroSub id={'foobar'}/>
        </>
    </SelectedObjectProvider>
  );
};