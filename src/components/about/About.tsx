import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './About.scss'

export const About = () => {
  return (
    <>
      <div id="me">
        <div>
          <h4>Background</h4>
          <p>Hi! I'm Ben, a full-stack software developer from Portland, OR. My background in marketing and sales has driven my passion in building online tools to help better serve clients. Coding has become my tool of choice to do this! I thrive in team environments and on solo builds. I am committed to continuously learning new technologies and work flows in order to build cutting edge products. See the photos below to learn more about me!</p>
        </div>
        <img src="./assets/square.jpg" alt="ben" />
      </div>
      <div id="carousel">
        <Carousel>
          <Carousel.Item>
            <img
            className="carousel-image"
            src="./assets/western.jpeg"
            alt="Western Washington University"
            />
            <Carousel.Caption>
              <div className="text-container">
              <h4>Western Washington University</h4>
              <p>I studied Business Administration with a concentration in Marketing and a minor in Economics. I also rowed all 4 years I was at WWU!</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="carousel-image"
            src="./assets/stAndrews.jpeg"
            alt="St. Andrews University - Scotland"
            />
            <Carousel.Caption>
              <div className="text-container">
              <h4>St. Andrews University - Scotland</h4>
              <p>The Quad at St. Andrews where I studied Corporate Social Responsibility and Finance for 4 months</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="carousel-image"
            src="./assets/rowing.jpeg"
            alt="Rowing at Western Washington University"
            />
            <Carousel.Caption>
              <div className="text-container">
              <h4>My teammates and I waiting for the next drill on Lake Whatcom in Bellingham, WA.</h4>
              <p>My coach would say 'Rowing is not a fun sport, its hardly a sport', and I would have to agree with that.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
