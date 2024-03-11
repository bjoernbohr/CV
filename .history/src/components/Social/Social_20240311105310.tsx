import './style.css';
import Marquee from 'react-marquee-text';

export const Social = (): JSX.Element => {
  return (
    <div className={'social-wrapper '} >
       <Marquee>
        <a
          href={'https://www.instagram.com/oernest_/'}
          title={'instagram'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Instagram
        </a>
      <Marquee/>
      <a
        href={'https://letterboxd.com/oernest/'}
        title={'letterboxd'}
        target={'_BLANK'}
        rel={'noreferrer'}
      >
        Letterboxd
      </a>
    </div>
  )
}
