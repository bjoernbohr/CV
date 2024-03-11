import React from 'react';

export type HeadlineProps = {
  title?: string;
  showBorder?: boolean;
  customStyle?: string;
  delay?: number;
}

export const Headline = (props: HeadlineProps): JSX.Element => {
  return (
    <h2>
      <span className={'relative -z-[2]'}>
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

