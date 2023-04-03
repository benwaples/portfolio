import React from 'react';
import './Connect.scss';
// import Email from './Email';

export default function Connect(): JSX.Element {
  return (
    <div id="connect">
      <div id="logos">
        <a href="https://www.linkedin.com/in/benwaples/" target="blank">
          <img id="linkedin" src="./assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/benwaples" target="blank">
          <img src="./assets/github.png" alt="Github" />
        </a>
        <a href="./assets/resume.pdf" target="_blank">
          <img id="cv-icon" src="./assets/CV.png" alt="resume" />
        </a>
      </div>
      {/* <Email /> */}
    </div>
  );
}
