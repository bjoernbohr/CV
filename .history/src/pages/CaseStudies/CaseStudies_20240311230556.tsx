import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { useCaseStudieContext } from '../../Provider/CaseStudieProvider/CaseStudieProvides';

export const CaseStudies = (): JSX.Element => {
  const { title, infotext } = useParams<{ title: string, infotext: string }>(); 
  const { intro, solution } = useCaseStudieContext() ?? { intro: '', solution: '' };
  console.log(title, solution)
  return (
    <HeroSub headline={title} solution={solution} />
  );
};