import React from 'react'
import './Projects.scss'

export const Projects = () => {
  return (
    <>
      <div className="project-gif-landscape">
        <h3>Alchemy Networkr</h3>
        <img src="https://media.giphy.com/media/R5fyBMahOc7RqqeyOA/giphy.gif" alt="example2" />
        <p>Alchemy Networkr, built in a 1 week remote sprint, is a social network for code school students to find and collaborate on projects. Built in Node.js with an Express API, Postgres Database, and Pug.js server side rendering. This app features the Github API, Jest testing framework, and integrated SSO.</p>
        <a href="https://github.com/Alchemy-Networkr/Networkr-BE/tree/main">See the code</a>
      </div>
      <div className="project-gif-landscape">
        <h3>No Stars, No Bucks</h3>
        <img src="https://media.giphy.com/media/B9QVsOvIGNgyg6pnJ5/giphy.gif" alt="example1" />
        <p>No Stars, No Bucks is a React App front-end with a Express API and postgreSQL database used by coffee enthusiasts who are traveling and looking to find the best coffee shops that aren't a chain. RESTful methodologies were used when building the backend API in order to streamline future development.</p>
        <a href="https://github.com/benwaples/coffee-findr-fe">See the code</a>
      </div>
      <div className="horizontalLine"></div>
      </>
  )
}
