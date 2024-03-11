import "./style.css";

export const Hero = (): JSX.Element => {

  return (
    <>
    <header
      id={'start'}
      className={'hero'}
    >
      <div className={'w-full flex items-center justify-center'}>
        <div className={'absolute md:relative flex flex-col items-center justify-center w-full h-auto'}>
          <h1>
            {
              loadData.map(v => {
                const infoVal = Object.values(v['TITLE']);
                return infoVal.map(val => {
                  return (
                    <p 
                    key={val['DELAY']}
                    className={'block relative'}
                    >
                    <span
                      className={'relative'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </span>
                    <span
                      className={'stroke absolute md:text-transparent'}
                      data-aos={'fade-up'}
                      data-aos-once={'true'}
                      data-aos-delay={val['DELAY']}
                    >
                      {val['TEXT']}
                    </span>
                 </p>
                  )
                })
              })
            }
          </h1>
          {width>breakpoint&&
            <Text person={loadData[0]} />
          }
        </div>
        <div className={'hero-img-wrapper'}>
          <figure className={'hero-img'}>
            <img
              src={`assets/img/${loadData[0].IMG}`}
              alt={'Hero-img'}
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={'250'}
              className={'img'}
            />
            <span
              data-aos={'fade-up'}
              data-aos-once={'true'}
              data-aos-delay={'50'}
              className={'img absolute bg-waterloo -z-[1]'}
            >
            </span>
          </figure>
        </div>
      </div>
      {width<breakpoint&&
        <Text person={loadData[0]} />
      }
    </header>
    </>
  );
}

