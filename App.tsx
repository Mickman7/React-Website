import * as React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  //console.log(window.location);
  var Component;
  switch (window.location.pathname) {
    case '/':
      break;
    case '/home':
      Component = <Home />;
      break;
    case '/services':
      Component = <Services />;
      break;
    case '/about':
      Component = <About />;
      break;
    case '/contact':
      Component = <Contact />;
      break;
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}
