import React from 'react';
import { NoiseButton } from './noise-button';
import { BookDemoBtn } from './book-demo-btn';

const ButtonsPage = () => {
  return (
    <div className='min-h-screen'>
      <NoiseButton />
      <BookDemoBtn />
    </div>
  );
};

export default ButtonsPage;

