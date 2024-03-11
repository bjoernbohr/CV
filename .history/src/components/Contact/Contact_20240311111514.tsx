// ... Other import statements

import { useState } from "react";

export const Contact = (): JSX.Element => {
  const [formVal, setFormVal] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormVal(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  }

  // ... Other code

  return (
    <div className={'contact-wrapper'}>
      <div className={'contact-inner'}>
        {/* ... Other code */}
        <form onSubmit={handleSubmit}>
          <div className={'flex flex-col items-center w-full mt-12'}>
            <div className={'relative'}>
              <a
                className={'relative flex justify-center items-center bg-copperfield w-full rounded-full w-[120px] h-[120px] z-[1]'}
                href={'mailto:bjoern.bohr@gmail.com?subject=Kontaktanfrage'}
              >
                <TbSend className={'w-[30px] h-[30px] stroke-waterloo-900'} />
              </a>
            </div>
            <input
              type="text"
              name="name"
              value={formVal.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formVal.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <textarea
              name="message"
              value={formVal.message}
      
              placeholder="Message"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}