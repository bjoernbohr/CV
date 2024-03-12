import { useParams } from 'react-router-dom'; 

export const CaseStudies = (): JSX.Element => {
  const { title, infotext } = useParams<{ title: string, infotext: string }>(); 

  return (
    <HeroSub headline={title} infotext={infotext} />
  );
};