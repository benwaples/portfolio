import React from 'react'
import { FillerType } from '../../../types'

export const PictureRight = ({title, imageSrc, description, caption}: FillerType) => {
  return (
    <div className="pictureRight">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <figure>
        <img src={imageSrc} alt={title}/>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  )
}
