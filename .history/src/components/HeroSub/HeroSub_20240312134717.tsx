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
          {/* When using a relative path, the image is not loaded when the src is a string literal. 
          To make it work, we need to use a dynamic import.  */}
          {/* eslint-disable-next-line @typescript-eslint/no-var-requires */}
          <img src={require(`../../assets/img/bjoern_02.jpg`)} alt="" />
        </figure>
      </header>
    </>
  );
}