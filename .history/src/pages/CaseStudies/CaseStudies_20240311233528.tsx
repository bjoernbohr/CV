import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ title: string }>(); 

  return (
    <HeroSub 
    index={title}
    />
  );
};