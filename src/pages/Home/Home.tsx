import { ViewportProvider } from "../../Providers/ViewportProvider";
import { About } from "../../components/About/About";
import { Divider } from "../../components/Divider/Divider";
import { Experience } from "../../components/Experience/Experience";
import { Hero } from "../../components/Hero/Hero";
import { Work } from "../../components/work/Work";

export const Home = (): JSX.Element => {
  return (
    <ViewportProvider>
      <Hero />
      <main>
        <section
          id={'about'}
          className={'px-6'}
        >
          <Divider
            title={'Vorstellung'}
            delay={0}
          />
          <About />
        </section>
        <section
          id={'experience'}
          className={'mx-auto mt-24 px-6 scroll-mt-24'}
        >
          <Divider
            title={'Erfahrung'}
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
            delay={0}
          />
          <Work />
        </section>   
      </main>
    </ViewportProvider>
  );
}