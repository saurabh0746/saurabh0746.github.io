import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

import aaina from '~/assets/aaina.png';
import aaina2 from '~/assets/aaina.png';
import edarah from '~/assets/edarah.png';
import edarah2 from '~/assets/edarah.png';
import wigt from '~/assets/wigt.png';
import wigt2 from '~/assets/wigt.png';
import canrahsbc from '~/assets/canrahsbc.png';
import canrahsbc2 from '~/assets/canrahsbc.png';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
  const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];
    

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AAINA : Dashboard for Cities"
        description="It is a dashboard for cities, an initiative of the Ministry of Housing and Urban Affairs is being envisaged which would serve as a tool for comparing similarly placed ULBs (Urban Local Bodies) and promoting peer learning amongst ULBs. This dashboard will inspire the ULBs by pointing to possibilities and areas of improvement and providing them the opportunity to learn and engage with frontrunners. This Project utilizes React.js, Tailwind css and few NPM libraries at frontend to create a robust platform."
        buttonText="View project"
        // buttonLink="/projects/smart-sparrow"
        buttonLink="https://aaina.gov.in/"
        model={{
          type: 'laptop',
          alt: 'Image of AAINA',
          textures: [
            {
              srcSet: `${aaina} 1280w, ${aaina2} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      /> */}
       <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Saudi Edarah Holding Co."
        description="It is a product that provides services like towing, Washing, services etc. In this project I have mastered cross-platform development for web, Android, and iOS apps, deepening skills in Angular and Ionic frameworks, and honing problem-solving abilities while collaborating effectively within a team."
        buttonText="View project"
        buttonLink="https://edarah.com.sa/"
        model={{
          type: 'laptop',
          alt: 'Image of Saudi Edarah Hollding',
          textures: [
            {
              srcSet: `${edarah} 800w, ${edarah2} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="widg.io : No Code Web Widgets"
        description="Widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current conﬁguration and state. When a widget’s state changes, the widget rebuilds its description, which the framework differs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next."
        buttonText="View project"
        buttonLink="https://www.widg.io"
        model={{
          type: 'laptop',
          alt: 'widg.io Image',
          textures: [
            {
              srcSet: `${wigt} 800w, ${wigt2} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="CANARA/HSBC BANK"
        description="Canara HSBC Oriental Bank of Commerce Life Insurance iSelect Smart360 Term Plan is your ﬁnancial companion ensuring that in case of unfortunate demise of Life Assured, the family still has its ﬁnancial needs met. This is a Non-Linked, Non-Participating, Individual, Pure Risk Premium, Life Insurance Plan which comes as an all in one product offering you the ﬂexibility to take cover as per your needs and ensuring that the dreams of your loved ones are not compromised."
        buttonText="View project"
        buttonLink="https://www.canarahsbclife.com/"
        model={{
          type: 'laptop',
          alt: 'CANARA/HSBC BANK Image',
          textures: [
            {
              srcSet: `${canrahsbc} 800w, ${canrahsbc2} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
