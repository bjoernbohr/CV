import { useParams } from 'react-router-dom'; 
import { Heroub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { title } = useParams<{ title: string }>(); 

  return (
    <Heroub text={title} />
  );
};