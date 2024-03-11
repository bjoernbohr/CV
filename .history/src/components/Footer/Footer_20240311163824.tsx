import { Divider } from '../Divider/Divider';
import { Social } from '../Social/Social';
import './style.css';
import {Form } from '../Form/Form';


export const Footer = (): JSX.Element => {

  return (
    <>
      <footer
      id={'contact'}
      >
        <Divider
          title={'Kontakt'}
          number={4}
          delay={0}
        />
        <Form />
      </footer>
      <Social />
      <span className={'d-element'}></span>
      <span className={'d-element'}></span>
    </>
  );
}

