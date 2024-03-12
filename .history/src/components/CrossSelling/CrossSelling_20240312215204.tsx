import React from 'react';

export type CrossSellingProps = {
  title?: string;
}

export const CrossSelling = (props: CrossSellingProps): JSX.Element => {
  return (
    <section className={'cross-selling'}>
      <h2>{props.title}</h2>
    </section>
  );
}

