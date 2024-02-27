import React from 'react';

export type LinkProps = {
  url:string,
  title:string,
  external?:boolean,
}
export const Link = (props:LinkProps): JSX.Element => {

  return (
    <a
      href={props.url}
      title={props.title}
      rel={'noreferrer'}
      target={props.external===true?'_BLANK':'_SELF'}
    >
      {props.title}
    </a>
  )
}



