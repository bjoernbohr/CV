import './style.css';
import Marquee from 'react-marquee-text';

export const Social = (): JSX.Element => {
  return (
    <div className={'social-wrapper '} >
      <Marquee velocity={70}>
        <a
          href={'https://www.instagram.com/oernest_/'}
          title={'instagram'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Instagram
        </a>
      </Marquee>
      <Marquee>
        <a
          href={'https://letterboxd.com/oernest/'}
          title={'letterboxd'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Letterboxd
        </a>
      </Marquee>
    </div>
  )
}
