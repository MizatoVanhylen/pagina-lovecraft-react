import { useState } from 'react';
import './banner.css';
import BannerBtn from './Bannerbtn';
import bannerImg from '../assets/img/bannerImg.jpg';
import Biografia from './Biografia';
import Bestiario from './Bestiario';
import Relatos from './Relatos';

const Banner = () => {
  const [estado, setEstado] = useState(null);

  const handleSectionClick = (sectionName) => {
    setEstado(sectionName);
  };

  return (
    <div className="btngroup">
      <img className="imgBanner" src={bannerImg} alt="Banner" />
      <div className="banner-container">
        <BannerBtn sectionName={'Biografía'} onClick={() => handleSectionClick('Biografía')} />
        <BannerBtn sectionName={'Bestiario'} onClick={() => handleSectionClick('Bestiario')} />
        <BannerBtn sectionName={'Relatos'} onClick={() => handleSectionClick('Relatos')} />
      </div>

      {}
      {estado === 'Biografía' && <Biografia />}
      {estado === 'Bestiario' && <Bestiario />}
      {estado === 'Relatos' && <Relatos />}
    </div>
  );
};

export default Banner;
