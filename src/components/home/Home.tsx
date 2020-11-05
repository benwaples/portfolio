import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import './Home.scss'

export const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Hi, Im Ben</h1>
          <p>
            I am a full-stack software engineer who enjoys finding innovative ways to solve problems, connecting with teammates, and vegetables.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}
