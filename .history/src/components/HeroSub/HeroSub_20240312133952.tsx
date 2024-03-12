import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{selectedObject?.TITLE}</h1>
        <figure>
          <img src={selectedObject?.IMG} alt={selectedObject?.TITLE} />
        </figure>
      </header>
    </>
  );
}