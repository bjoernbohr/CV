import React from 'react';
import './style.css';

export type DividerProps = {
  title?: string;
  number?: number;
  delay?: number | '450';
  offset?: number;
  children?: React.ReactNode,
}

export const Divider = (props: DividerProps): JSX.Element => {
  return (
    <div
      data-aos={'fade-up'}
      data-aos-once={'true'}
      data-aos-delay={props.delay}
      data-aos-offset={props.offset}
      className={'divider flex items-center justify-center relative px-6 w-full'}
    >
      <h3 className={'text-waterloo text-base tracking-widest font-semibold uppercase whitespace-nowrap px-1 bg-copperfield-100'}>
        <span className={'px-2'}>
          {props.number&&
            <span>0{props.number}.&nbsp;</span>
          }
          {props.title??
            props.title
          }
          {props.children}
        </span>
      </h3>
      <span className={'line absolute h-[1px] bg-waterloo w-full top-1/2 -translate-y-1/2 -z-[1]'}></span>
    </div>
  );
}

