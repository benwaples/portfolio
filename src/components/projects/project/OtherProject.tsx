import React from 'react'
import { OtherProjectType } from '../../../types'

export default function OtherProject({ imgSrc, githubLink, deployedLink}: OtherProjectType) {
  return (
    <section className="otherProject">
      <a href={deployedLink} target="_blank" rel="noreferrer"><img src={imgSrc} alt="plantr"/></a>
      <a href={githubLink} target="_blank" rel="noreferrer">See the code</a>
    </section>
  )
}
