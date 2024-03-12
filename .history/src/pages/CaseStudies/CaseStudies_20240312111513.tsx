import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 
  const selectedObject = CONTENT[0]?.INFO["02"];
  console.log(selectedObject);
  return (
  
      <HeroSub 
      id={id}
      />
  );
};