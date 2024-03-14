import {useEffect, useState} from 'react';
import AOS from 'aos';
import LINKS from './../../assets/content/links.json'
import {UseViewport} from '../../Providers/ViewportProvider';

import 'aos/dist/aos.css';
import './style.css';

export const Nav = (): JSX.Element => {
  const [triggered, setTriggered] = useState(false);
  const { width } = UseViewport();
  const breakpoint = 1024;

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
      <div className={'logo'}>
        <div>
        {width>768?
            <p>© {new Date().getFullYear()}</p>
            :
            <a href="/CV/" className={'back-button'}>
              Björn Bohr
            </a>
          }
          
          <div className={'social'}>
            <a 
              className={'instagram'}
              href={'https://www.instagram.com/oernest_/'} 
              title={'instragram link'}
              target={'_BLANK'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                <path data-name="layer2" d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path>
                <path data-name="layer1" d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path>
              </svg>
            </a>
            <a 
              className={'letterboxd'}
              href={'https://letterboxd.com/oernest/'} 
              title={'letterboxd link'} 
              target={'_BLANK'}
            >
              <svg width="24" height="24" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="m 5.145,9.376 0,-4.776 -0.872,0 0,-1.2 3.164,0 0,1.2 -0.873,0 0,4.787 1.9625,0 0,-1.309 1.4195,0 0,2.522 -5.6735,0 0,-1.224 0.873,0 z M 1,7 c 0,3.314 2.686,6 6,6 3.314,0 6,-2.686 6,-6 C 13,3.686 10.314,1 7,1 3.686,1 1,3.686 1,7 Z"/>
            </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={ `${triggered ? 'triggered' : ''}`}>
        {width<768?
          <p>© {new Date().getFullYear()}</p>
          :
          <a href="/CV/" className={'back-button'}>
            Björn Bohr
          </a>
        }
        
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
    </nav>
  )
}
