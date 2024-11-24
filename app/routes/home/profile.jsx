import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hey, It's me, a tech enthusiast riding the waves of software
      engineering for over 4 years. I'm all about crafting sleek
      applications that dance seamlessly across platforms. From tackling
      thorny security challenges to squeezing out every ounce of
      performance, I thrive on the thrill of creating robust solutions
      that just work.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently, I'm steering the ship at Xcelore Private Limited, where
      I'm knee-deep in Angular and Ionic, sculpting user experiences
      that are as smooth as butter. AWS is my playground, where I flex
      my cloud muscles and push the boundaries of what's possible in app
      deployment.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      When I'm not immersed in code, you'll find me indulging my love
      for motorcycles, riding through scenic routes, and finding
      tranquility in the mountains, petting around with Doggos
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Let's connect and geek out over all things tech – whether it's
      about the latest JavaScript libraries or swapping war stories from
      the trenches of software development.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
                {/* <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg> */}
                <svg className={styles.svg} data-visible={visible} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 220">
                  <text className={styles.svgtext}  x="50" y="120" font-family="Papyrus" font-size="60" text-anchor="middle" writing-mode="tb">अभियंता</text>
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
