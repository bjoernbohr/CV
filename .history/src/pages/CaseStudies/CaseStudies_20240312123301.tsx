import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams() as { id: string };
  const selectedObject = useSelectedObject();

  return (
    <SelectedObjectProvider id={"01"}>
      <>
        {selectedObject && (
          <div>
            <h1>{selectedObject.TITLE}</h1>
            <p>{selectedObject.SUB}</p>
            {/* Add other properties as needed */}
          </div>
        )}
        <HeroSub id={'foobar'}/>
      </>
    </SelectedObjectProvider>
  );
};