import React from 'react';

import {Hero} from './components/Hero/Hero';
import {Divider} from './components/Divider/Divider';
import {Work} from './components/work/Work';

import {About} from './components/About/About';
import {ViewportProvider} from './Providers/ViewportProvider';
import {Skills} from './components/Skills/Skills';
import {Contact} from './components/Contact/Contact';

function App() {

  return (
    <ViewportProvider>
      <div className={'sticky flex flex-wrap items-center justify-between w-full md:w-10/12 md:mx-auto px-6 top-0 z-[10] bg-copperfield-100'}>
        <a
          href={'#start'}
          title={'start'}
          className={'inline-block text-copperfield text-base font-semibold tracking-widest uppercase px-3 py-4'}
        >
          Bjoern
        </a>
        <nav className={'w-full md:w-auto flex md:inline-block justify-between order-2 md:order-[initial]'}>
          <a
            href={'#about'}
            title={'about'}
            className={'inline-block text-waterloo text-base tracking-widest  px-3 py-4'}
          >
            About
          </a>
          <a
            href={'#goodToKnow'}
            title={'work'}
            className={'inline-block text-waterloo text-base tracking-widest  px-3 py-4'}
          >
            Werdegang
          </a>
          <a
            href={'#work'}
            title={'work'}
            className={'inline-block text-waterloo text-base tracking-widest  px-3 py-4'}
          >
            Arbeiten
          </a>
          <a
            href={'#contact'}
            title={'contact'}
            className={'inline-block text-waterloo text-base tracking-widest  px-3 py-4'}
          >
            Kontakt
          </a>
        </nav>
        <p className={'text-copperfield text-base font-semibold tracking-widest uppercase'}>&copy; 2024</p>
      </div>
      <Hero />
      <main className={'container scroll-smooth mx-auto mt-24'}>
        <section
          id={'about'}
          className={'px-6 md:mt-24 scroll-mt-24'}
        >
          <Divider
            title={'Vorstellung'}
            number={1}
            delay={0}
          />
          <About />
        </section>
        <section
          id={'goodToKnow'}
          className={'mx-auto mt-24 px-6 scroll-mt-24'}
        >
          <Divider
            title={'Werdegang'}
            number={2}
            delay={0}
          />
          <Skills />
        </section>
        <section
          id={'work'}
          className={'mx-auto mt-24 px-6 scroll-mt-24'}
        >
          <Divider
            title={'Arbeiten'}
            number={3}
            delay={0}
          />
          <Work />
        </section>
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
      </main>
    </ViewportProvider>
  );
}

export default App;
