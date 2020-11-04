import React from 'react'
import { FillerType } from '../../../types'

export const PictureLeft = ({title, imageSrc, description}: FillerType) => {
  return (
    <div className="pictureLeft">
      <img src={imageSrc} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
  )
}
