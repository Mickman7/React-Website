import * as React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  //console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/home':
      component = <Home />;
      break;
    case '/services':
      component = <Services />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/contact':
      component = <Contact />;
      break;
  }

  return (
    <div>
      <Navbar />
      <div className="container">{component}</div>
    </div>
  );
}
