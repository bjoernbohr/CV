import "./style.css";

interface HeroSubProps {
  title?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.title}</h1>
      </header>
    </>
  );
}