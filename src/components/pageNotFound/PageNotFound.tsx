import React from 'react';
import './pageNotFound.scss';

export default function PageNotFound(): JSX.Element {
  return (
    <div id="page-not-found">
      <h1>Page Not Found</h1>
      <h3>
        Head back <a href="./">home</a>
      </h3>
    </div>
  );
}
