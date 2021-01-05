/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import OtherProject from './project/OtherProject';
import Project from './project/Project';
import {
  alchemyNetworkr,
  canary,
  nasaTracker,
  nsnb,
  plantr,
} from './project/projectContent';
import './Projects.scss';

export default function Projects(): JSX.Element {
  return (
    <>
      <Project {...canary} />
      <Project {...alchemyNetworkr} />
      <Project {...nsnb} />

      <div className="otherProjects">
        <h2>Other Projects</h2>
        <OtherProject {...plantr} />
        <OtherProject {...nasaTracker} />
      </div>
      <div className="horizontalLine" />
    </>
  );
}
