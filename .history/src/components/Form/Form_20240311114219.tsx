import Axios from 'axios';
import{ useState } from 'react';
import { Headline } from '../Headline/Headline';

const sendEmailURL = '<YOUR_FUNCTION_URL>';
const Form = () => {
  const [state, setState] = useState({
    message: '',
    name: '',
    subject: '',
  });

  const { message, name, subject } = state;
  
  const handleState = ({ target: { id, value } }:any) =>
    setState({ ...state, [id]: value });

  const sendEmail = (e) => {
    e.preventDefault();
    Axios.get(sendEmailURL, {
      params: {
        message,
        name,
        subject,
      },
    });
  };

  return (
    <div className={'contact-wrapper'}>
      <div className={'contact-inner'}>
        <Headline
          title={'Sag Hallo!'}
          showBorder={true}
        />
            <form
      onSubmit={sendEmail}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label htmlFor={'name'}>Name</label>
      <input id={'name'} onChange={handleState} value={name} />

      <label htmlFor={'message'}>Message</label>

      <input
        id={'message'}
        onChange={handleState}
        value={message}
      />

      <label htmlFor={'subject'}>Subject</label>

      <input
        id={'subject'}
        onChange={handleState}
        value={subject}
      />

      <input type={'submit'} value={'Send Email'} />
    </form>
      </div>
    </div>
  )
}

export default Form;
