import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";

export const HeroSub = (): JSX.Element => {
  const selectedObject = useSelectedObject();

  console.log(useSelectedObject);
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