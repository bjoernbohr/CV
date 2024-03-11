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
          <div 
            className={'contact-text'}
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={350}
            data-aos-offset={250}
            >
            <p>
              Du hast lust auf eine Zusammenarbeit oder du willst einfach nur hallo sagen?
              Dann Schreib mir gerne eine E-Mail.
            </p>
            <a 
              href={'mailto:bjoern.bohr@gmail.com?subjectKontaktanfrage'} 
              title={'Kontaktanfrage'}
              className={'btn-rounded'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path data-name="layer2" fill="none" stroke="#202020" d="M24 40L60 4"></path>
                  <path data-name="layer1" fill="none" stroke="#202020" d="M4 28L60 4 36 60 24 40 4 28z" data-darkreader-inline-stroke=""></path>
                </svg>
            </a>
          </div>  
        </div>
      </div>
  )
}



