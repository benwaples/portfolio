import React from 'react'
import './Tech.scss'

export const Tech = () => {
  return (
    <>
      <div id="techStack">
        <section>
          <h3>Development</h3>
          <img src="./assets/js.png" alt="JavaScript" />
          <img src="./assets/ts.png" alt="TypeScript" />
          <img src="./assets/html.png" alt="HTML" />
        <img src="./assets/css.png" alt="CSS" />
        </section>
        <section>
          <h3>Libraries and Frameworks</h3>
          <img src="./assets/React.png" title="React" alt="React" />
          <img src="./assets/Redux.png" alt="Redux" />
          <img src="./assets/scss.png" alt="SCSS" />
          <img src="./assets/node.png" alt="Node" />
        <img src="./assets/Expressjs.png" alt="Express JS" />
        <img src="./assets/pug.png" alt="PugJs" />
        </section>
        <section>
          <h3>Dev Tools</h3>
          <img src="./assets/githubLarge.png" alt="Github" />
          <img src="./assets/heroku.png" alt="Heroku" />
          <img src="./assets/netlify.png" alt="Netlify" />
        </section>
        <section>
          <h3>Testing</h3>
          <img src="./assets/jest.png" alt="Jest Testing" />
        <img src="./assets/reacttestinglibrary.png" alt="React Testing Library" />
        <img src="./assets/qunit.png" alt="Qunit Test" />
        </section>
        <section>
          <h3>Database</h3>
          <img src="./assets/postgresql.png" alt="postgreSQL" />
        </section>
      </div>
      <div className="horizontalLine"></div>
    </>
  )
}
