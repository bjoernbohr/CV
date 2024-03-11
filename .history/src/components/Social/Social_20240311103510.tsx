


export const Social = (): JSX.Element => {
  return (
    <div className={'social relative flex flex-col items-center mx-auto w-full max-w-[560px] mt-8 top-2 md:px-12 '} >
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
  )
}
