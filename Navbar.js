import * as React from 'react';
import './style.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        Site Name
      </a>
      <ul>
        <li className="active">
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
