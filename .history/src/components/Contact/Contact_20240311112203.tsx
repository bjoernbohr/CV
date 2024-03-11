import {Headline} from '../Headline/Headline';
import React, {useReducer, useState} from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiDribbble} from 'react-icons/fi';
import {SiLetterboxd} from 'react-icons/si';
import {TbSend} from 'react-icons/tb';
import './style.css'


export const Contact = (): JSX.Element => {

  const [formVal, setFormVal] = useState({
      name: '',
      email: '',
      message: ''
  });

  const handleChange = (e:any) => {
    //setFormVal({...formVal, [e.target.name]: e.target.value})
    const { name, value } = e.target;
    setFormVal(pre => ({
      ...pre,
      [name]: value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
  }

  const reducer = (state:any, action:any)  => {
    if(action.type==='buy')return{money: state.money - 10};
    if(action.type==='sell')return{money: state.money + 10}

  }

  // const initialState = {money:100};
  // const [state, dispatch] = useReducer(reducer, initialState)

  return(
      <div className={'contact-wrapper'}>
        <div className={'contact-inner'}>
          <Headline
            title={'Sag Hallo!'}
            showBorder={true}
          />
          <div
            className={'relative flex flex-col items-center w-full '}
          >
            <div className={'flex flex-col items-center w-full mt-12'}>
              <div className={'relative'}>
                <a
                  className={'relative flex justify-center items-center bg-copperfield w-full rounded-full w-[120px] h-[120px] z-[1]'}
                  href={'mailto:bjoern.bohr@gmail.com?subject=Kontaktanfrage'}
                >
                  <TbSend className={'w-[30px] h-[30px] stroke-waterloo-900'} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}



