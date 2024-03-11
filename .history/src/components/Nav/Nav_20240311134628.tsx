import {useEffect, useState} from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

import './style.css';
import LINKS from './../../assets/content/links.json'


export const Nav = (): JSX.Element => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  const [triggered, setTriggered] = useState(false);

  const handleClick = () => {
    setTriggered(!triggered);
  };
  
  const linkItems = Object.values(LINKS[0]).map((link, index) => (
    <li key={index}>
      <a 
      href={`#${link.LINK}`}
      title={link.TITLE} 
      >
        {link.TITLE}
      </a>
    </li>
));

  return (
    <nav>
      <div>
        <div className={'logo'}>
          <h3>Björn</h3>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <button 
          className={ `menu-trigger ${triggered ? 'triggered' : ''}`}
          onClick={handleClick}
        >
          <span></span>
        </button>
        <menu>
          {linkItems}
        </menu>  
      </div>
    </nav>
  )
}
