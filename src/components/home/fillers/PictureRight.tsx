import React from 'react'
import { FillerType } from '../../../types'

export const PictureRight = ({title, imageSrc, description}: FillerType) => {
  return (
    <div className="pictureRight">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageSrc} alt={title}/>
    </div>
  )
}
