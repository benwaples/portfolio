import React from 'react';
import { Link } from 'react-router-dom';
import './Placeholder.scss';

export default function Placeholder(): JSX.Element {
  return (
    <>
      <div id="home">
        <h1>
          I guess this makes me the host that invites guests over before dinner
          is ready...
        </h1>
        <h3>
          {' '}
          While I have you here, let me introduce myself. I'm Ben Waples, a
          full-stack software developer. My portfolio is under construction
          right now, but please find me on{' '}
          <a href="https://github.com/benwaples">Github</a>,{' '}
          <a href="https://www.linkedin.com/in/benwaples/">LinkedIn</a>, or
          checkout out my{' '}
          <a href="./assets/resume.pdf" target="_blank">
            resume
          </a>
          , to learn more and reach out.
        </h3>
        <p>Thanks!</p>
        <div id="orange-color-block">
          <Link to="/home">
            <img src="./assets/headshot.jpg" alt="ben" />
          </Link>
        </div>
      </div>
    </>
  );
}
