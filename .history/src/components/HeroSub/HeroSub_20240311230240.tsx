import "./style.css";

interface HeroSubProps {
  headline?: string;
  infotext?: string;
}

export const HerSub = (props: HeroSubProps): JSX.Element => {

  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.headline}</h1>
        <p>{props.infotext}</p>
      </header>
    </>
  );
}