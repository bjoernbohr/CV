import "./style.css";

interface HeroubProps {
  text: string;
}

export const Heroub = (props: HeroubProps): JSX.Element => {

  return (
    <>
      <header
        id={'start'}
        className={'hero'}
      >
        <p>{props.text}</p>
        </header>
    </>
  );
}