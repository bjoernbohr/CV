import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { WorkProvider } from '../../Provider/WorkProvider/WorkProvider';

export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 

  return (
    <WorkProvider>
      <HeroSub 
      id={id}
      />
    </WorkProvider>
  );
};