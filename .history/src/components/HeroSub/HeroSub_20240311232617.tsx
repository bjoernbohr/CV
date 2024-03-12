import "./style.css";

interface HeroSubProps {
  headline?: string;
  sub?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.headline}</h1>
        <h1>{props.sub}</h1>
      </header>
    </>
  );
}