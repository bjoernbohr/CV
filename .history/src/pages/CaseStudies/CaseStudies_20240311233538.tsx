import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 

  return (
    <HeroSub 
    index={id}
    />
  );
};