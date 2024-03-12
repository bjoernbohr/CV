import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { WorkProvider, useWork } from '../../Provider/WorkProvider/WorkProvider';

export const CaseStudies = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); 
  const { index } = useParams();
  const workData = useWork();
  const caseStudy = workData.find(data => data.INFO.some(info => info.ID === parseInt(index)));

  if (!caseStudy) {
    return <div>Case Study nicht gefunden.</div>;
  }


  return (
    <WorkProvider>
      <HeroSub 
      id={id}
      />
    </WorkProvider>
  );
};