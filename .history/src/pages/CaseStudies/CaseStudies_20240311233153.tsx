import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { title, index } = useParams<{ title: string, index: number }>(); 

  return (
    <HeroSub 
    index={index}
    headline={title}
    />
  );
};