import {Hero} from './components/Hero/Hero';
import {Divider} from './components/Divider/Divider';
import {About} from './components/About/About';
import {UseViewport, ViewportProvider} from './Providers/ViewportProvider';
import {Experience} from './components/Experience/Experience';
import {Contact} from './components/Contact/Contact';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App() {
  const { width } = UseViewport();

  
  return (
    <ViewportProvider>
      <Hero />
      <main className={'container scroll-smooth mx-auto'}>
        <section
          id={'about'}
          className={'px-6'}
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
            title={'Erfahrung'}
            number={2}
            delay={0}
          />
          <Experience />
        </section>
        <section
          id={'casestudies'}
          className={'mx-auto mt-24 px-6 scroll-mt-24'}
        >
          <Divider
            title={'Porjekte'}
            number={3}
            delay={0}
          />
        </section>
     
      </main>
      <Footer />
    </ViewportProvider>
  );
}

export default App;
