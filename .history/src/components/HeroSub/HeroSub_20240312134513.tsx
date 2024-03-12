import { useSelectedObject } from "../../Providers/WorkProvider";
import "./style.css";
import CONTENT from './../../assets/content/hero.json'

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  const selectedObject = useSelectedObject();


  return (
    <>
      <header
        id={'start'}
        className={'hero hero-sub'}
      >
        <h1>{selectedObject?.TITLE}</h1>
        <figure>
          <img src={`assets/img/${selectedObject?.IMG}`} alt="" />
        </figure>
      </header>
    </>
  );
}