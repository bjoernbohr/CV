import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";

export const HeroSub = (): JSX.Element => {
  const selectedObject = useSelectedObject();


console.log(selectedObject);
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
      </header>
    </>
  );
}