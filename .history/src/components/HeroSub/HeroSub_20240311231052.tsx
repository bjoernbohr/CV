import { useCaseStudieContext } from "../../Provider/CaseStudyProvider/CaseStudyProvider";
import "./style.css";

interface HeroSubProps {
  headline?: string;
  solution?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.headline}</h1>
        <p>{props.solution}</p>
      </header>
    </>
  );
}