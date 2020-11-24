import React from 'react'
import OtherProject from './project/OtherProject'
import Project from './project/Project'
import { alchemyNetworkr, canary, nasaTracker, nsnb, plantr } from './project/projectContent'
import './Projects.scss'

export const Projects = () => {
  return (
    <>
      <Project {... canary}/>
      <Project {... alchemyNetworkr}/>
      <Project {... nsnb}/>

        <h3>Other Projects</h3>
      <div  className="otherProjects">
        <OtherProject { ...plantr } />
        <OtherProject { ...nasaTracker } />
      </div>
      <div className="horizontalLine"></div>
    </>
  )
}
