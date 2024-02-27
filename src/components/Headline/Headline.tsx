import React from 'react';

export type HeadlineProps = {
  title?: string;
  showBorder?: boolean;
  customStyle?: string;
  delay?: number;
}

export const Headline = (props: HeadlineProps): JSX.Element => {
  return (
    <h2
      data-aos-delay={props.delay}
      data-aos={'fade-up'}
      data-aos-once={'true'}
      className={`${props.customStyle} font-marcellus text-4xl md:text-7xl xl:text-8xl uppercase text-copperfield tracking-widest leading-tight text-center max-w-[670px] mx-auto pointer-events-none`}
    >
      <span className={'relative -z-[1]'}>{props.title}</span>
      {props.showBorder===true?
        <span className={'stroke absolute text-transparent inset-0 z-[2]'}>
          {props.title}
        </span>:''
      }
    </h2>
  );
}

