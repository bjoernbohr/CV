import { useState } from 'react';
import {Headline} from '../Headline/Headline';
import './style.css'
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCypIXhoKsnMgKA_CGm5scaZCcJ9Otetrk",

  authDomain: "portfolio-f34f9.firebaseapp.com",

  projectId: "portfolio-f34f9",

  storageBucket: "portfolio-f34f9.appspot.com",

  messagingSenderId: "958092018905",

  appId: "1:958092018905:web:8228f1f9b95ce3561d6ac8"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('messages').add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Error sending message. Please try again later.');
    }
  };


  return(
      <div className={'contact-wrapper'}>
        <div className={'contact-inner'}>
          <Headline
            title={'Sag Hallo!'}
            showBorder={true}
          />
         <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>


              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
  )
}



