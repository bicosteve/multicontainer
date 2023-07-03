import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>I am some other page</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};
