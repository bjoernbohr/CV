import {useEffect, useState} from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

import './style.css';
import LINKS from './../../assets/content/links.json'


export const Nav = (): JSX.Element => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])


  const handleClick = () => {
    setTriggered(!triggered);
  };
  
  const linkItems = Object.values(LINKS[0]).map((link, index) => (
    <li 
      key={index}
    >
      <a 
      href={`#${link.LINK}`}
      title={link.TITLE} 
      className={`link link-${index}`}
      >
        {link.TITLE}
      </a>
    </li>
));

  return (
    <nav>
      <div>
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
      <div className={'logo'}>
        <div>
            <h3>Björn Bohr</h3>
            <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </nav>
  )
}
