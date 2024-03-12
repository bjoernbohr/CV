import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { useCaseStudieContext } from '../../Provider/CaseStudieProvider/CaseStudieProvides';

export const CaseStudies = (): JSX.Element => {
  const { title, infotext } = useParams<{ title: string, infotext: string }>(); 

  return (
    <HeroSub headline={title} />
  );
};