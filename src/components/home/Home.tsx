import React from 'react'
import { Tech } from '../tech/Tech'
import { Projects } from '../projects/Projects'
import { education, rowing, stAndrews } from '../about/fillers/fillerContent'
import { PictureLeft } from '../about/fillers/PictureLeft'
import { PictureRight } from '../about/fillers/PictureRight'
import './Home.scss'

export const Home = () => {
  return (
    <>
      <header id="header">
        <div id="text">
          <h1>Ben Waples</h1>
          <p>Full-Stack Developer</p>
        </div>
      </header>
      <nav>

      </nav>
      <div id="projects">
        <h1>Projects</h1>
        <Projects />
      </div>
      <div id="tech">
        <h1>tech</h1>
        <Tech />
      </div>
      <div id="aboutMe">
        <h1>A little about me</h1>
        <PictureLeft {...education}/>
        <PictureRight {...rowing}/>
        <PictureLeft {...stAndrews}/>
      </div>
    </>
  )
}
