import React from 'react'
import OtherProject from './project/OtherProject'
import Project from './project/Project'
import { alchemyNetworkr, canary, nsnb, plantr } from './project/projectContent'
import './Projects.scss'

export const Projects = () => {
  return (
    <>
      <Project {... canary}/>
      <Project {... alchemyNetworkr}/>
      <Project {... nsnb}/>

      <div>
        <h3>Other Projects</h3>
        <OtherProject { ...plantr } />
      </div>
    </>
  )
}
