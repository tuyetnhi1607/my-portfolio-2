import * as React from 'react';
import { Intro } from './intro';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div className='w-screen max-w-7xl mx-auto'>
      <Intro />
    </div>
  );
}
