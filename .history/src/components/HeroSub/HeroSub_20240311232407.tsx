import "./style.css";

interface HeroSubProps {
  headline?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.headline}</h1>
      </header>
    </>
  );
}