import React from 'react';
import { Divider } from '../Divider/Divider';
import { Contact } from '../Contact/Contact';
import { UseViewport } from '../../Providers/ViewportProvider';
import { Nav } from '../Nav/Nav';


export const Footer = (): JSX.Element => {
  const { width } = UseViewport();

  return (
    <>
      <footer
      id={'contact'}
      className={'mx-auto mt-24 lg:mt-32 px-6 -scroll-mt-20'}
      >
        <Divider
          title={'Kontakt'}
          number={4}
          delay={0}
        />
        <Contact />
      </footer>
      {width<650&&
        <Nav />
      }
    </>
  );
}

