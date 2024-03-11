import { useParams } from 'react-router-dom'; 

export const CaseStudies = (): JSX.Element => {
  const { title } = useParams<{ title: string }>(); 

  return (
    <div>
      <h1>Subpage: {title}</h1>
    
    </div>
  );
};