import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
  const { title } = useParams<{ title: string }>(); 


  return (
  
      <HeroSub 
      id={title}
      />
  );
};