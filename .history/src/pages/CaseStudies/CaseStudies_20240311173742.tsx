import { useParams } from 'react-router-dom'; 
import { Heroub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { title, infotext } = useParams<{ title: string, infotext: string }>(); 

  return (
    <Heroub headline={title} infotext={infotext} />
  );
};