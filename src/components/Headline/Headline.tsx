import React from 'react';

export type HeadlineProps = {
  title?: string;
  showBorder?: boolean;
  customStyle?: string;
  delay?: number;
}

export const Headline = (props: HeadlineProps): JSX.Element => {
  return (
    <div className={'title'}>
      <h2
        data-aos={'fade-up'}
        data-aos-once={'true'}
        data-aos-delay={350}
        data-aos-offset={250}
      >
        <span className={'relative'}>
          {props.title}
        </span>
      </h2>
      {props.showBorder===true?
          <span 
            className={'stroke'}
            data-aos={'fade-up'}
            data-aos-once={'true'}
            data-aos-delay={250}
            data-aos-offset={250}
          >
            {props.title}
          </span>:''
        }
    </div>
  );
}

