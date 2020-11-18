import React from 'react'
import { Tech } from '../tech/Tech'
import { Projects } from '../projects/Projects'
import './Home.scss'
import { About } from '../about/About'
import { Connect } from '../connect/Connect'
// import { Nav } from '../nav/Nav'

export const Home = () => {
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const techRef = React.useRef<HTMLDivElement>(null)
  const connect = React.useRef<HTMLDivElement>(null)
  
  const handleNav = (reference: React.RefObject<HTMLDivElement>) => {
    if(reference.current) {
      reference.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <>
      <header id="header">
        <div id="text">
          <h1>Ben Waples</h1>
          <p>Full-Stack Developer</p>
        </div>
          <img onClick={() => handleNav(projectsRef)} src="./assets/scroll-down.png" className="fadeIn bounce-2" alt="scroll down"/>
      </header>
      <nav>
        <p onClick={() => handleNav(aboutRef)}>About Me</p>
        <p onClick={() => handleNav(projectsRef)}>Recent Projects</p>
        <p onClick={() => handleNav(techRef)}>Tech Stack</p>
        <p onClick={() => handleNav(connect)}>Connect</p>
      </nav>
      <div ref={projectsRef} id="projects">
        <h1>Projects</h1>
        <Projects />
      </div>
      <div ref={techRef} id="tech">
        <h1>Tech Stack</h1>
        <Tech />
      </div>
      <div ref={aboutRef} id="aboutMe">
        <h1>A little about me</h1>
        <About />
      <div className="horizontalLine"></div>
      </div>
      <div ref={connect} id="connect">
        <h1>Lets Connect!</h1>
        <Connect />
      </div>
    </>
  )
}
