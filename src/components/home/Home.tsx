import React from 'react'
import { Tech } from '../tech/Tech'
import { Projects } from '../projects/Projects'
import { education, rowing, stAndrews } from '../about/fillers/fillerContent'
import { PictureLeft } from '../about/fillers/PictureLeft'
import { PictureRight } from '../about/fillers/PictureRight'
import './Home.scss'
// import { Nav } from '../nav/Nav'

export const Home = () => {
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const techRef = React.useRef<HTMLDivElement>(null)

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
      </header>
      <nav>
        <p onClick={() => handleNav(aboutRef)}>About Me</p>
        <p onClick={() => handleNav(projectsRef)}>Recent Projects</p>
        <p onClick={() => handleNav(techRef)}>Tech Stack</p>
        <p onClick={() => handleNav(techRef)}>Connect</p>
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
        <PictureLeft {...education}/>
        <PictureRight {...rowing}/>
        <PictureLeft {...stAndrews}/>
      </div>
    </>
  )
}
