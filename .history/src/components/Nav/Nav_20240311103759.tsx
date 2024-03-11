import React, {useEffect, useState} from 'react';
import './style.css';
import LINKS from './../../assets/content/links.json'
import {UseViewport} from '../../Providers/ViewportProvider';


export const Nav = (): JSX.Element => {
  const [triggered, setTriggered] = useState(false);
  const { width } = UseViewport();
  const breakpoint = 650;

  const handleClick = () => {
    setTriggered(!triggered);
  };
  
  const linkItems = Object.values(LINKS[0]).map((link, index) => (
    <li key={index}>
      <a 
      href={`./#${link.LINK}`}
      title={link.TITLE} 
      >
        {link.TITLE}
      </a>
    </li>
));

  return (
    <nav>
      {width<breakpoint&&
        <button 
          className={ `btn-rounded menu-trigger ${triggered ? 'triggered' : ''}`}
          onClick={handleClick}
        >
          <span></span>
        </button>
      }
      <menu>
        {linkItems}
      </menu>  
    </nav>
  )
}
