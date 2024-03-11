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
  
  const handleLinkClick = () => {
    setTriggered(false); 
  };

  const routes = {
    home: '/#',
  };
  
  const linkItems = Object.values(LINKS[0]).map((link, index) => (
    <li key={index}>
      <a
              href={link.LINK !== 'contact' ? '/' : routes[link.LINK]}
        title={link.TITLE}
        className={`link link-${index}`}
        onClick={handleLinkClick} 
      >
        {link.TITLE}
      </a>
    </li>
  ));

  return (
    <nav>
      <div className={ `${triggered ? 'triggered' : ''}`}>
        <button 
          className={ `menu-trigger`}
          onClick={handleClick}
        >
          <span></span>
        </button>
      </div>
      <div className={'menu'}>
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
