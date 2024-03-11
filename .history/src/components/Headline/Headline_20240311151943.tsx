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
      data-aos={'fade-up'}
      data-aos-once={'true'}
      data-aos-delay={250}
    >
      <span className={'relative'}>
        {props.title}
      </span>
      {props.showBorder===true?
        <span className={'stroke'}>
          {props.title}
        </span>:''
      }
    </h2>
  );
}

