import "./style.css";

interface HeroSubProps {
  foobar?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.foobar}</h1>
      </header>
    </>
  );
}