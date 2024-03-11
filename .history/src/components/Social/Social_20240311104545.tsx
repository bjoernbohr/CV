import './style.css';

export const Social = (): JSX.Element => {
  return (
    <div className={'social-wrapper '} >
      <div className={'marquee'}>
          <a
            href={'https://www.instagram.com/oernest_/'}
            title={'instagram'}
            target={'_BLANK'}
            rel={'noreferrer'}
          >
            Instagram
          </a>
          <a
            href={'https://letterboxd.com/oernest/'}
            title={'letterboxd'}
            target={'_BLANK'}
            rel={'noreferrer'}
          >
            Letterboxd
          </a>
      </div>
    </div>
  )
}
