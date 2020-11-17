import React from 'react'
import { education, rowing, stAndrews } from './fillers/fillerContent'
import { PictureLeft } from './fillers/PictureLeft'
import { PictureRight } from './fillers/PictureRight'
import './About.scss'

export const About = () => {
  return (
    <>
      <PictureLeft {...education}/>
      <PictureRight {...rowing}/>
      <PictureLeft {...stAndrews}/>
      <div id="connect-section">
        <div>
          <h3>Background</h3>
          <p>Hi! I'm ben, a full-stack software developer from Portland, OR. My background in marketing and sales has driven my passion in building online tools to help better serve clients. Coding has become my tool of choice to do this! I thrive in team environments and on solo builds. I am committed to continuously learning new technologies and work flows in order to build cutting edge products. See the photos below to learn more about me!</p>
        </div>
        <img src="./assets/square.jpg" alt="ben" />
      </div>
    </>
  )
}
