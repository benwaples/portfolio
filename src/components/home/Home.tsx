import React from 'react'
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
      <div id="content">
        <PictureLeft {...education}/>
        <PictureRight {...rowing}/>
        <PictureLeft {...stAndrews}/>

      </div>
    </>
  )
}
