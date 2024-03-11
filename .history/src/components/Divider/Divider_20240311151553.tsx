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
      className={'divider'}
    >
      <h3>
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
      <hr></hr>
    </div>
  );
}

