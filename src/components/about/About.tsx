import React from 'react'
import { education, rowing, stAndrews } from './fillers/fillerContent'
import { PictureLeft } from './fillers/PictureLeft'
import { PictureRight } from './fillers/PictureRight'
import './About.scss'

export const About = () => {
  return (
    <div id="About">
      <section>
        <img id="theBigOne" src="" alt="ben" />
        <p>What I do in my free time</p>
      </section>
      <PictureLeft {...education}/>
      <PictureRight {...rowing}/>
      <PictureLeft {...stAndrews}/>
    </div>
  )
}
