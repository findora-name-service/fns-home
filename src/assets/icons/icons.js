import React from 'react';
import Icon from '@ant-design/icons';



const ArrowLeft = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.33398 16H29.334" stroke="black" stroke-width="3"/>
  <path d="M13.334 24L5.33398 16L13.334 8" stroke="black" stroke-width="3"/>
  </svg>
  
);

const ArrowRight = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.666 16H2.66602" stroke="black" stroke-width="3"/>
  <path d="M18.666 24L26.666 16L18.666 8" stroke="black" stroke-width="3"/>
  </svg>
  
);

export const ArrowLeftIcon = (props) => <Icon component={ArrowLeft} {...props} />;
export const ArrowRightIcon = (props) => <Icon component={ArrowRight} {...props} />;