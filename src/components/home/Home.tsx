import React from 'react'
import { bristExperience, education, stAndrews } from './fillers/fillerContent'
import { PictureLeft } from './fillers/PictureLeft'
import { PictureRight } from './fillers/PictureRight'

export const Home = () => {
  return (
    <div>
      {/* picture of ben
      <img /> */}
      <PictureLeft {...education}/>
      <PictureRight {...stAndrews}/>
      <PictureLeft {...bristExperience}/>
    </div>
  )
}
