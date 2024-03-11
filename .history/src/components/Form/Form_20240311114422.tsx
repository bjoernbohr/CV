import {Headline} from '../Headline/Headline';
import './style.css'
import firebase from 'firebase/app';
import 'firebase/firestore';


const Form = () => {



  return(
      <div className={'contact-wrapper'}>
        <div className={'contact-inner'}>
          <Headline
            title={'Sag Hallo!'}
            showBorder={true}
          />
          
        </div>

      </div>
  )
}



