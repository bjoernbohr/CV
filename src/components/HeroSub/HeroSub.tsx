import "./style.css";

interface HeroubProps {
  headline?: string;
  infotext?: string;
}

export const Heroub = (props: HeroubProps): JSX.Element => {

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