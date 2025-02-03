import React from 'react';
import './bannerbtn.css';

function BannerBtn ({ sectionName }) {
  return (
    <button className="btn">{sectionName}</button>
  )
}

export default BannerBtn;