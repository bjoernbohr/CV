import "./style.css";

interface HeroSubProps {
  headline?: string;
  index?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.headline}</h1>
        <h1>{props.index}</h1>
      </header>
    </>
  );
}