import { ViewportProvider } from "../../Providers/ViewportProvider";
import { About } from "../../components/About/About";
import { Divider } from "../../components/Divider/Divider";
import { Experience } from "../../components/Experience/Experience";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { Work } from "../../components/Work/Work";

export const Home = (): JSX.Element => {
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
          id={'Casestudies'}
          className={'mx-auto mt-24 px-6 scroll-mt-24'}
        >
          <Divider
            title={'Case Studies'}
            number={3}
            delay={0}
          />
          <Work />
        </section>
     
      </main>
      <Footer />
    </ViewportProvider>
  );
}