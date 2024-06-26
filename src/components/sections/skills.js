import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';
import sr from '@utils/sr';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyledSkillsSection = styled.div`
  margin-top: 2rem;

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;

    &:hover,
    &:focus {
      outline: 0;

      .img {
        -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
        filter: grayscale(0);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
  }
`;

const imageSelector = imageName => {
  switch (imageName) {
    case 'c-plus-plus':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/c-plus-plus.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="C++"
        />
      );
    case 'javascript':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/javascript.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="JavaScript"
        />
      );
    case 'typescript':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/typescript.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="TypeScript"
        />
      );
    case 'react-js':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/react-js.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="ReactJS"
        />
      );
    case 'next-js':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/next-js.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="NextJS"
        />
      );
    case 'tailwind-css':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/tailwind-css.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Tailwind CSS"
        />
      );
    case 'node-js':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/node-js.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="NodeJS"
        />
      );
    case 'postgresql':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/postgresql.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="PostgreSQL"
        />
      );
    case 'docker':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/docker.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Docker"
        />
      );
    case 'vs-code':
      return (
        <StaticImage
          className="img"
          src="../../../content/skills/vs-code.png"
          height={64}
          quality={95}
          objectFit="contain"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="VS Code"
        />
      );
    default:
      return null; // Return null or a default image if preferred
  }
};

const Skills = () => {
  const revealContainer = useRef(null);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealServices = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealServices.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const skills = [
    'c-plus-plus',
    'javascript',
    'typescript',
    'react-js',
    'next-js',
    'tailwind-css',
    'node-js',
    'postgresql',
    'docker',
  ];

  return (
    <StyledSkillsSection>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="wrapper">{imageSelector(skill)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSkillsSection>
  );
};

export default Skills;
