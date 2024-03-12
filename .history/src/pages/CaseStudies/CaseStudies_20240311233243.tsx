import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { index } = useParams<{ index: string }>(); 

  return (
    <HeroSub 
    index={index}
    />
  );
};