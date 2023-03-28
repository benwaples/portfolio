/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import OtherProject from './project/OtherProject';
import Project from './project/Project';
import projects, {
  nasaTracker,
  plantr,
  twelveDays,
} from './project/projectContent';
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
          <OtherProject {...plantr} />
          <OtherProject {...nasaTracker} />
          <OtherProject {...twelveDays} />
        </div>
      </div>
      <div className="horizontalLine" />
    </>
  );
}
