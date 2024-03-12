import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { index } = useParams<{ index: number }>(); 

  return (
    <HeroSub 
    index={index}
    />
  );
};