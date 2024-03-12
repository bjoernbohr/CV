import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams();
  console.log(CONTENT.find((item) => item.INFO["01"].ID.toString());
  const selectedObject = CONTENT.find((item) => item.INFO["01"].ID.toString() === id);

  return (
  
      <HeroSub 
      id={id}
      />
  );
};