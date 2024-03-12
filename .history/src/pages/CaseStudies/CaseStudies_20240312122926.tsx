import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider, useSelectedObject  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams() as { id: string };

  // Debugging: Check if the id parameter is correct
  console.log("ID from useParams:", id);

  // Ensure that the id passed to SelectedObjectProvider matches your data structure
  return (
    <SelectedObjectProvider id={"01"}>  {/* Make sure the id is in the correct format */}
      <>
        {console.log("selectedObject:", useSelectedObject)} {/* Debugging: Check if selectedObject is correctly retrieved */}
        <HeroSub id={'foobar'}/>
      </>
    </SelectedObjectProvider>
  );
};