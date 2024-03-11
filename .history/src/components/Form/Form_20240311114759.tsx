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
          <div>
            <p>
              Du denkst meine Fähigkeiten passen gut zu deinem Projekt, oder du willst einfach nur hallo sagen?
            </p>
<h3>Schreib mir eine E-Mail</h3>
          <a href="mailto:bjoern.bohr@gmail.com?subject='Kontaktanfrage'" title="Kontaktanfrage"></a>
          </div>  
        </div>
      </div>
  )
}



