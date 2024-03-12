import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { title, sub } = useParams<{ title: string, sub: string }>(); 

  return (
    <HeroSub 
    headline={title}
    sub={sub}
    />
  );
};