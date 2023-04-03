import React from 'react';
import useScreenQuery from '../../utils/use-screen-query';

interface INavProps {
  handleNav: (refName: string) => void;
}

function Nav(props: INavProps): JSX.Element {
  const { handleNav } = props;

  const { isMobile } = useScreenQuery();

  return (
    <nav>
      <button onClick={() => handleNav('projects')} type="button">
        <p>{isMobile ? 'Projects' : 'Recent Projects'}</p>
      </button>
      <button onClick={() => handleNav('tech')} type="button">
        <p>{isMobile ? 'Tech' : 'Tech Stack'}</p>
      </button>
      <button onClick={() => handleNav('about')} type="button">
        <p>{isMobile ? 'About' : 'About Me'}</p>
      </button>
      <button onClick={() => handleNav('connect')} type="button">
        <p>Connect</p>
      </button>
    </nav>
  );
}

export default Nav;
