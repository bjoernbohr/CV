import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import CONTENT from '../../assets/content/work.json';


export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 
  const index = "0"  + id;
  //const selectedObject = CONTENT[0]?.INFO[index];
  console.log(index);
  console.log("foobar " + "02");
  return (
  
      <HeroSub 
      id={id}
      />
  );
};