import "./style.css";

interface HeroubProps {
  text?: string;
  infotext?: string;
}

export const Heroub = (props: HeroubProps): JSX.Element => {

  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.text}</h1>
        <p>{props.text}</p>
      </header>
    </>
  );
}