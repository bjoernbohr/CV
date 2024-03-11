import { Divider } from '../Divider/Divider';
import { Contact } from '../Contact/Contact';
import { UseViewport } from '../../Providers/ViewportProvider';
import { Social } from '../Social/Social';
import './style.css';


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
        <Contact />
      </footer>
      <Social />
    </>
  );
}

