import { Divider } from '../Divider/Divider';
import { Contact } from '../Contact/Contact';
import { UseViewport } from '../../Providers/ViewportProvider';
import { Social } from '../Social/Social';


export const Footer = (): JSX.Element => {
  const { width } = UseViewport();

  return (
    <>
      <Divider
        title={'Kontakt'}
        number={4}
        delay={0}
      />
      <footer
      id={'contact'}
      className={'mx-auto mt-24 lg:mt-32 -scroll-mt-20'}
      >
        <Contact />
      </footer>
      <Social />
    </>
  );
}

