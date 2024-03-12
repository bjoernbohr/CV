import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const selectedObject = useSelectedObject();


console.log(selectedObject);
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{selectedObject.title}</h1>
      </header>
    </>
  );
}