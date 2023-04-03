/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
import React, { createRef, useEffect, useRef, useState } from 'react';

import Tech from '../tech/Tech';
import Projects from '../projects/Projects';
import './Home.scss';
import '../../mobileStyles/home.scss';
import About from '../about/About';
import Connect from '../connect/Connect';
import pacificCity from './magicImage';
import useScreenQuery from '../../utils/use-screen-query';
import Nav from '../nav/nav';
import { Dictionary, HomepageSections } from '../../types';

export default function Home(): JSX.Element {
  const [source, setSource] = useState(
    'https://media.giphy.com/media/LLd6Ma5vQtXyw/giphy.gif'
  );

  const refMap: Dictionary = useRef({});

  const { isDesktop } = useScreenQuery();

  useEffect(() => {
    const img = new Image();
    img.src = pacificCity;
    img.onload = () => setSource(pacificCity);
  }, []);

  useEffect(() => {
    const sections = [
      HomepageSections.Projects,
      HomepageSections.Tech,
      HomepageSections.About,
      HomepageSections.Connect,
    ];

    sections.forEach((section) => {
      refMap.current[section] = createRef();
    });
  }, []);

  const handleNav = (refName: string) => {
    const ref = refMap.current[refName];
    if (ref.current) {
      const yOffset = -60;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="top">
        <header
          className={source.includes('giphy') ? 'loading' : ''}
          style={{
            backgroundImage: isDesktop ? `url(${source})` : '',
            backgroundColor: !isDesktop ? 'tan' : '',
          }}
          id="header"
        >
          <div id="text">
            <h1>Ben Waples</h1>
            <p>Full-Stack Developer</p>
          </div>
          <button onClick={() => handleNav('projects')} type="button">
            <img
              src="./assets/scroll-down.png"
              className="fadeIn bounce-2"
              alt="scroll down"
            />
          </button>
        </header>
      </div>
      <Nav handleNav={handleNav} />
      <div id="body">
        <div className="content" ref={refMap.current.projects} id="projects">
          <h1>Projects</h1>
          <div id="projects-component">
            <Projects />
          </div>
        </div>
        <div className="content" ref={refMap.current.tech} id="tech">
          <h1>Tech Stack</h1>
          <Tech />
        </div>
        <div className="content" ref={refMap.current.about} id="aboutMe">
          <h1>A little about me</h1>
          <About />
          <div className="horizontalLine" />
        </div>
        <div className="content" ref={refMap.current.connect} id="connect">
          <h1>Lets Connect!</h1>
          <Connect />
          <a id="source-code" href="https://github.com/benwaples/portfolio">
            See Source Code
          </a>
        </div>
      </div>
    </>
  );
}
