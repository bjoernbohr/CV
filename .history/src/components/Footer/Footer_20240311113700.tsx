import { Divider } from '../Divider/Divider';
import { UseViewport } from '../../Providers/ViewportProvider';
import { Social } from '../Social/Social';
import './style.css';
import { Form } from 'react-router-dom';


export const Footer = (): JSX.Element => {
  const { width } = UseViewport();

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
        <FormComponent />
      </footer>
      <Social />
    </>
  );
}

