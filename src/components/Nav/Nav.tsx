import {useEffect, useState} from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

import './style.css';
import LINKS from './../../assets/content/links.json'
import { useLocation } from 'react-router-dom';


export const Nav = (): JSX.Element => {
  const [triggered, setTriggered] = useState(false);
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    setShowBackButton(location.pathname.includes("casestudies"));
  }, [location.pathname]);
  

  useEffect(() => {
    AOS.init();
  }, [])


  const handleClick = () => {
    setTriggered(!triggered);
  };
  
  const handleLinkClick = () => {
    setTriggered(false); 
  };
  
  const linkItems = Object.values(LINKS[0]).map((link, index) => (
    <li key={index}>
      <a
        href={link.LINK === 'contact' ? 'contact' : `/CV/#${link.LINK}`}
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
        {showBackButton?
          <a href="/CV/" className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M9.354 4.354a.5.5 0 0 1 0 .708L5.707 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/>
            </svg>
          </a>
        :''}


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
