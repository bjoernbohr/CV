import "./style.css";

interface HeroSubProps {
  id?: string;
}

export const HeroSub = (props: HeroSubProps): JSX.Element => {
  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <h1>{props.id}</h1>
      </header>
    </>
  );
}