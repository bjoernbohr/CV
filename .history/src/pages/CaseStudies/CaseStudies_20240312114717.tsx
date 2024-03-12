import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';
import { SelectedObjectProvider } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 
  const index = "0"  + id;
  const selectedObject = (CONTENT[0]?.INFO as { [key: string]: any })[index];

  return (
    <SelectedObjectProvider id={id}>  
    <HeroSub id={selectedObject?.TITLE}/>
  </SelectedObjectProvider>
  );
};