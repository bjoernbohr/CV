import { useState } from 'react';
import { Headline } from '../Headline/Headline';
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore explicitly
import { firebaseConfig } from '../../../config/firebase.config'; // Import your Firebase configuration

// Initialize Firebase app if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get Firestore instance directly from firebase object
const db = firebase.firestore();

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await db.collection('messages').add({
        name,
        email,
        message,
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

  return (
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

export default Form;
