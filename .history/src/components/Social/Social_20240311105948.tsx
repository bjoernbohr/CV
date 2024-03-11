import './style.css';
import Marquee from "react-fast-marquee";

export const Social = (): JSX.Element => {
  return (
    <div className={'social-wrapper '} >
            <Marquee direction={'right'} pauseOnHover={true} >
        <a
          href={'https://www.instagram.com/oernest_/'}
          title={'instagram'}
          target={'_BLANK'}
          rel={'noreferrer'}
        >
          Instagram
        </a>
      </Marquee>
      <Marquee direction={'right'} pauseOnHover={true} >
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
