import {useState} from 'react';
import './style.css';
import LINKS from './../../assets/content/links.json'


export const Nav = (): JSX.Element => {
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
      <button 
        className={ `menu-trigger ${triggered ? 'triggered' : ''}`}
        onClick={handleClick}
      >
        <span></span>
      </button>
      <menu>
        {linkItems}
      </menu>  
    </nav>
  )
}
