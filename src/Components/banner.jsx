import './banner.css';
import BannerBtn from './Bannerbtn';
import bannerImg from '../assets/img/bannerImg.jpg';

const Banner = () => {
  return (
    <div className="btngroup">
      <img className="imgBanner" src={bannerImg} alt="Banner" />
      <div className="banner-container">
        <BannerBtn sectionName={'Biografía'}/>
        <BannerBtn sectionName={'Bestiario'}/>
        <BannerBtn sectionName={'Relatos'}/>
      </div>
    </div>
  )
}

export default Banner;
