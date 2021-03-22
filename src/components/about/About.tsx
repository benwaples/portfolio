/* eslint-disable prettier/prettier */
import React from 'react';
import ImageGallery from 'react-image-gallery'
import './About.scss';
import { imageArray } from './assets';

export default function About(): JSX.Element {
  return (
    <>
      <div id="me">
        <div>
          <h4>Background</h4>
          <p>
            Hi! I&#39;m Ben, a full-stack software developer from Portland, OR.
            My background in marketing and sales has driven my passion in
            building online tools to help better serve clients. I thrive in team environments and on solo
            projects. I am committed to continuously learning new technologies and work
            flows in order to build cutting edge products. See the photos below
            to learn more about me!
          </p>
        </div>
        <img src="./assets/square.jpg" alt="ben" />
      </div>
      <div id="carousel">
        <ImageGallery 
          items={imageArray}
        />
      </div>
    </>
  );
}
