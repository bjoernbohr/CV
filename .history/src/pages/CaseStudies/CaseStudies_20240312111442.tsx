import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 
const foobar = "2";
  const selectedObject = CONTENT[0]?.INFO[foobar];

  return (
  
      <HeroSub 
      id={id}
      />
  );
};