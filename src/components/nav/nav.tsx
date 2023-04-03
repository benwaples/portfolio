import React from 'react';

interface INavProps {
  handleNav: (refName: string) => void;
}

function Nav(props: INavProps): JSX.Element {
  const { handleNav } = props;

  return (
    <nav>
      <button onClick={() => handleNav('projects')} type="button">
        <p>Recent Projects</p>
      </button>
      <button onClick={() => handleNav('tech')} type="button">
        <p>Tech Stack</p>
      </button>
      <button onClick={() => handleNav('about')} type="button">
        <p>About Me</p>
      </button>
      <button onClick={() => handleNav('connect')} type="button">
        <p>Connect</p>
      </button>
    </nav>
  );
}

export default Nav;
