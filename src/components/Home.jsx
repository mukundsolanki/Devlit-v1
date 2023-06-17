import React from 'react';
import Cursor from './Cursor.jsx';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div className='home-links'>
        <ul>
          <li>
            <Link to="/build">Start Building</Link>
          </li>
          <li>
            <Link to="/compiler">Try our online compiler</Link>
          </li>
          <li>
            <Link to="/profile">Your Profile</Link>
          </li>
          <li>
            <Link to="/about">About Devlit</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
        <Cursor />
      </div>
    </>
  );
}
