import * as React from 'react';
import './style.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        Site Name
      </a>
      <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink hfre="/services">Services</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/contact">Contact Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? 'active' : ''}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
