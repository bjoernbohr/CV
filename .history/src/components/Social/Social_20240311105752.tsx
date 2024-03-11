import './style.css';
import MarqueeText from 'react-marquee-text';

export const Social = (): JSX.Element => {
  return (
    <div className={'social-wrapper '} >
      <MarqueeText>
        <a
          href={'https://www.instagram.com/oernest_/'}
          title={'instagram'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Instagram
        </a>
      </MarqueeText>
      <MarqueeText direction={'right'} duration={10}>
        <a
          href={'https://letterboxd.com/oernest/'}
          title={'letterboxd'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Letterboxd
        </a>
      </MarqueeText>
    </div>
  )
}
