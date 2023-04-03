/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import OtherProject from './project/OtherProject';
import Project from './project/Project';
import projects, { otherProjects } from './project/projectContent';
import './Projects.scss';

export default function Projects(): JSX.Element {
  return (
    <>
      {projects.map((project) => (
        <Project {...project} key={project.title} />
      ))}

      <div className="otherProjects">
        <h2>Other Projects</h2>
        <div className="thumbnail-container">
          {otherProjects.map((project) => (
            <OtherProject key={project.imgSrc} {...project} />
          ))}
        </div>
      </div>
      <div className="horizontalLine" />
    </>
  );
}
