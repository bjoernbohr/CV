import { useParams } from 'react-router-dom'; 
import { HeroSub } from '../../components/HeroSub/HeroSub';
import { SelectedObjectProvider  } from '../../Providers/WorkProvider';


export const CaseStudies = (): JSX.Element => {

const { id } = useParams() as { id: string };

let index  ="0";
if(id==="0") {
  index= "1";
} else {
  index = id
}
  console.log(id)
  return (
    <SelectedObjectProvider id={index}>  
        <HeroSub />
    </SelectedObjectProvider>
  );
};