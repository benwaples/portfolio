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
          <p>Hi! I am a full-stack software developer </p>
        </div>
        <img src="./assets/square.jpg" alt="ben" />
      </div>
    </>
  )
}
