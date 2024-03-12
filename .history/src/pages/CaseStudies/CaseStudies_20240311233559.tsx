import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';

export const CaseStudies = (): JSX.Element => {
  const { foobar } = useParams<{ foobar: string }>(); 

  return (
    <HeroSub 
    foobar={foobar}
    />
  );
};