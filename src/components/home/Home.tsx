/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
import React, { useEffect, useState, useRef } from 'react';

import Tech from '../tech/Tech';
import Projects from '../projects/Projects';
import './Home.scss';
import '../../mobileStyles/home.scss';
import About from '../about/About';
import Connect from '../connect/Connect';
import pacificCity from './magicImage';

export default function Home(): JSX.Element {
  const [source, setSource] = useState(
    'https://media.giphy.com/media/LLd6Ma5vQtXyw/giphy.gif'
  );
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const connect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = pacificCity;
    img.onload = () => setSource(pacificCity);
  }, []);

  const handleNav = (reference: React.RefObject<HTMLDivElement>) => {
    if (reference.current) {
      reference.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div id="top">
        <header
          className={source.includes('giphy') ? 'loading' : ''}
          style={{ backgroundImage: `url(${source})` }}
          id="header"
        >
          <div id="text">
            <h1>Ben Waples</h1>
            <p>Full-Stack Developer</p>
          </div>
          <button onClick={() => handleNav(projectsRef)} type="button">
            <img
              src="./assets/scroll-down.png"
              className="fadeIn bounce-2"
              alt="scroll down"
            />
          </button>
        </header>
      </div>
      <nav>
        <button onClick={() => handleNav(projectsRef)} type="button">
          <p>Recent Projects</p>
        </button>
        <button onClick={() => handleNav(techRef)} type="button">
          <p>Tech Stack</p>
        </button>
        <button onClick={() => handleNav(aboutRef)} type="button">
          <p>About Me</p>
        </button>
        <button onClick={() => handleNav(connect)} type="button">
          <p>Connect</p>
        </button>
      </nav>
      <div id="body">
        <div className="content" ref={projectsRef} id="projects">
          <h1>Projects</h1>
          <div id="projects-component">
            <Projects />
          </div>
        </div>
        <div className="content" ref={techRef} id="tech">
          <h1>Tech Stack</h1>
          <Tech />
        </div>
        <div className="content" ref={aboutRef} id="aboutMe">
          <h1>A little about me</h1>
          <About />
          <div className="horizontalLine" />
        </div>
        <div className="content" ref={connect} id="connect">
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
