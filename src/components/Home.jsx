import React from 'react';
import Cursor from './Cursor.jsx';

export default function Home() {
  return (
    <div className='home-links'>
      <ul>
        <li>
          <a>Start Building</a>
        </li>
        <li>
          <a>Try our online compiler</a>
        </li>
        <li>
          <a>Your Profile</a>
        </li>
        <li>
          <a>About Devlit</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
      </ul>
      <Cursor />
    </div>
  );
}
