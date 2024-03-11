import {Headline} from '../Headline/Headline';
import './style.css'


export const Form = (): JSX.Element => {
  return(
      <div className={'contact-wrapper'}>
        <div className={'contact-inner'}>
          <Headline
            title={'Sag Hallo!'}
            showBorder={true}
          />
          <a href="mailto:bjoern.bohr@gmail.com?subject='Kontaktanfrage'" title="Kontaktanfrage"></a>
        </div>
      </div>
  )
}



