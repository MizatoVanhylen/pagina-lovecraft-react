import React from 'react';
import './bannerbtn.css';

const BannerBtn = ({ sectionName, onClick }) => (
  <button className='btn' onClick={onClick}>
    {sectionName}
  </button>
);

export default BannerBtn;
